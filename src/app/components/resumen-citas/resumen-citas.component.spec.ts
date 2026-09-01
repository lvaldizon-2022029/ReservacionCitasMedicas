import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenCitas } from './resumen-citas.component';

describe('ResumenCitas', () => {
  let component: ResumenCitas;
  let fixture: ComponentFixture<ResumenCitas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumenCitas],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenCitas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
