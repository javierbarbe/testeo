import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [], // Puedes importar aquí cualquier módulo necesario para las pruebas
      providers: [],
      declarations: [], // Quita OpenMenuButtonComponent de aquí
    }).compileComponents();

    // fixture = TestBed.createComponent(AppComponent);
    // component = fixture.componentInstance;

  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [], // Importa BrowserAnimationsModule aquí
  //     providers: [],
  //     declarations: [], // Agrega AppComponent aquí
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   componente = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  let componente: AppComponent = new AppComponent();
  it('crear component', () => {
    expect(componente).toBeTruthy();
  });
  it('titulo component debe ser reservasApp', () => {
    expect(componente.title).toBe('reservasApp');
  });



});
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   let fixture: ComponentFixture<AppComponent>;
//   let component: AppComponent;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [],
//     }).compileComponents();

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should have title containing "reservasApp"', () => {
//   //   expect(component.title).toContain('reservasApp');
//   // });

//   // it('should render the title in the HTML', () => {
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement as HTMLElement;
//   //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello,');
//   // });
// });
