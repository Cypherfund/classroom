import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderPopup2Component } from './reminder-popup2.component';

describe('ReminderPopup2Component', () => {
  let component: ReminderPopup2Component;
  let fixture: ComponentFixture<ReminderPopup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReminderPopup2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReminderPopup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
