import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningScheduleComponent } from './learning-schedule.component';

describe('LearningScheduleComponent', () => {
  let component: LearningScheduleComponent;
  let fixture: ComponentFixture<LearningScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
