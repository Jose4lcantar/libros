import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioParcialComponent } from './ejercicio-parcial.component';

describe('EjercicioParcialComponent', () => {
  let component: EjercicioParcialComponent;
  let fixture: ComponentFixture<EjercicioParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioParcialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
