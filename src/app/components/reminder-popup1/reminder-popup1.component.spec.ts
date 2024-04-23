import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderPopup1Component } from './reminder-popup1.component';

describe('ReminderPopup1Component', () => {
  let component: ReminderPopup1Component;
  let fixture: ComponentFixture<ReminderPopup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReminderPopup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReminderPopup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
