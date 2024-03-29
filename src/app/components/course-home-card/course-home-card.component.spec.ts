import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHomeCardComponent } from './course-home-card.component';

describe('CourseHomeCardComponent', () => {
  let component: CourseHomeCardComponent;
  let fixture: ComponentFixture<CourseHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseHomeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
