import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasContainer } from './citas-container.component';

describe('CitasContainer', () => {
  let component: CitasContainer;
  let fixture: ComponentFixture<CitasContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
