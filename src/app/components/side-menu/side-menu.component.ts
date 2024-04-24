import { Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NavigationService } from '../../shared/services/navigation-service.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  showFiller = false;
  @ViewChild('sidenav') sidenav?: MatSidenav;

  constructor(private navegacionService:NavigationService) {
    this.onToggleFromOAnyWhere();
  }
  // navegacionService = inject(NavigationService);
  close(txt?: string) {
    this.sidenav?.close();
  }

  onToggleFromOAnyWhere() {
    this.navegacionService.toggleButton$
      .pipe(
        tap(() => this.sidenav?.toggle())
      )
      .subscribe();
  }
}
