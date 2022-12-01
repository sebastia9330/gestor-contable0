import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIngresoComponent } from './listar-ingreso.component';

describe('ListarIngresoComponent', () => {
  let component: ListarIngresoComponent;
  let fixture: ComponentFixture<ListarIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
