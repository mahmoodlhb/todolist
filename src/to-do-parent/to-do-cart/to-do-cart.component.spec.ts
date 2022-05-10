import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCartComponent } from './to-do-cart.component';

describe('ToDoCartComponent', () => {
  let component: ToDoCartComponent;
  let fixture: ComponentFixture<ToDoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
