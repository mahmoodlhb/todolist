import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCartComponent } from './done-cart.component';

describe('DoneCartComponent', () => {
  let component: DoneCartComponent;
  let fixture: ComponentFixture<DoneCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
