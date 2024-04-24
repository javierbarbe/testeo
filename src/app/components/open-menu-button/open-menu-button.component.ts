import { Component, inject } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-open-menu-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './open-menu-button.component.html',
  styleUrl: './open-menu-button.component.scss',
})
export class OpenMenuButtonComponent {
  constructor() {}
  navegacionService =inject(NavigationService);
  // constructor(private navegacionService:NavigationService) {}
  toggleButton(whoToggles: string) {
    console.log(whoToggles);
    this.navegacionService.toggleButton$.next(whoToggles);
  }
}
