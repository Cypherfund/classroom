import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRemindersComponent } from './learning-reminders.component';

describe('LearningRemindersComponent', () => {
  let component: LearningRemindersComponent;
  let fixture: ComponentFixture<LearningRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningRemindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
