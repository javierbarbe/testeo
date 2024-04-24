import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { NavigationService } from '../../shared/services/navigation-service.service';

// describe('SideMenuComponent', () => {
//   let component: SideMenuComponent = new SideMenuComponent(new NavigationService());
//   let fixture: ComponentFixture<SideMenuComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SideMenuComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SideMenuComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// it('debe de tener un navegacionService', ()=> {
//   expect(component.navegacionService).toBeTruthy();
// })

// });

  let component: SideMenuComponent = new SideMenuComponent(new NavigationService());

let fixture: ComponentFixture<SideMenuComponent>;
let navigationService: NavigationService;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [], // Puedes importar aquí cualquier módulo necesario para las pruebas
    // providers: [NavigationService],
    declarations: [], // Quita SideMenuComponent de aquí
  }).compileComponents();

  fixture = TestBed.createComponent(SideMenuComponent);
  // component = fixture.componentInstance;

  // navigationService = TestBed.inject(NavigationService);
});

it('should create', () => {
  expect(component).toBeTruthy();
});


// it('should render title', () => {
//   // console.log('fixture es:',fixture)
//   const compiled = fixture.nativeElement as HTMLElement;
//   expect(compiled.querySelector('h1')?.textContent).toContain('Hello,');
//   // component = fixture.componentInstance;
//   //    const fixture = TestBed.createComponent(AppComponent);
//   // console.log(fixture.nativeElement)
//   // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, reservasApp');
// });
// Otras pruebas aquí...
