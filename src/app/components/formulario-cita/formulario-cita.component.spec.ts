import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCita } from './formulario-cita.component';

describe('FormularioCita', () => {
  let component: FormularioCita;
  let fixture: ComponentFixture<FormularioCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCita],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
