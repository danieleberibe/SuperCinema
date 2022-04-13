import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloCardComponent } from './carosello-card.component';

describe('CaroselloCardComponent', () => {
  let component: CaroselloCardComponent;
  let fixture: ComponentFixture<CaroselloCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroselloCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
