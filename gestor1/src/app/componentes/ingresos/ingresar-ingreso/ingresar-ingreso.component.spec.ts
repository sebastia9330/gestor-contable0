import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarIngresoComponent } from './ingresar-ingreso.component';

describe('IngresarIngresoComponent', () => {
  let component: IngresarIngresoComponent;
  let fixture: ComponentFixture<IngresarIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
