import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoCitas } from './listado-citas.component';

describe('ListadoCitas', () => {
  let component: ListadoCitas;
  let fixture: ComponentFixture<ListadoCitas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCitas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoCitas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
