import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingCartComponent } from './doing-cart.component';

describe('DoingCartComponent', () => {
  let component: DoingCartComponent;
  let fixture: ComponentFixture<DoingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
