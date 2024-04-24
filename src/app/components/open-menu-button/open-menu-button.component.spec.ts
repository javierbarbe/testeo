// // import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

// // import { OpenMenuButtonComponent } from './open-menu-button.component';
// // import { NavigationService } from '../../shared/services/navigation-service.service';
// // /**
// //  *
// //  */

// // describe('OpenMenuButtonComponent', () => {
// //   let component: OpenMenuButtonComponent = new OpenMenuButtonComponent();
// //   let navigationService : any //= inject([NavigationService],(serv:NavigationService)=> serv);;
// //   let fixture: ComponentFixture<OpenMenuButtonComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [OpenMenuButtonComponent],
// //       providers: [NavigationService], // Provee el servicio en el módulo de prueba
// //     }).compileComponents();

// //     fixture = TestBed.createComponent(OpenMenuButtonComponent);
// //     component = fixture.componentInstance;

// //     // Obtiene una instancia del servicio usando inject()
// //     // navigationService = inject([NavigationService],(serv:NavigationService)=> serv);
// //     navigationService = TestBed.inject(NavigationService);
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { OpenMenuButtonComponent } from './open-menu-button.component';
// import { NavigationService } from '../../shared/services/navigation-service.service';

// describe('OpenMenuButtonComponent', () => {
//   let component: OpenMenuButtonComponent;
//   let navigationService: NavigationService; // Declara una variable para el servicio
//   let fixture: ComponentFixture<OpenMenuButtonComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [OpenMenuButtonComponent],
//       providers: [NavigationService], // Provee el servicio en el módulo de prueba
//     }).compileComponents();

//     fixture = TestBed.createComponent(OpenMenuButtonComponent);
//     component = fixture.componentInstance;

//     // Obtiene una instancia del servicio usando TestBed.inject()
//     navigationService = TestBed.inject(NavigationService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // Otras pruebas aquí...
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenMenuButtonComponent } from './open-menu-button.component';
import { NavigationService } from '../../shared/services/navigation-service.service';

describe('OpenMenuButtonComponent', () => {
  let component: OpenMenuButtonComponent;
  let fixture: ComponentFixture<OpenMenuButtonComponent>;
  let navigationService: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [], // Puedes importar aquí cualquier módulo necesario para las pruebas
      providers: [NavigationService],
      declarations: [], // Quita OpenMenuButtonComponent de aquí
    }).compileComponents();

    fixture = TestBed.createComponent(OpenMenuButtonComponent);
    component = fixture.componentInstance;

    navigationService = TestBed.inject(NavigationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title', () => {
    // console.log('fixture es:',fixture)
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello,');
    // component = fixture.componentInstance;
    //    const fixture = TestBed.createComponent(AppComponent);
    // console.log(fixture.nativeElement)
    // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, reservasApp');
  });
  // Otras pruebas aquí...
});
