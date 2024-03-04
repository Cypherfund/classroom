import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIncludedComponent } from './course-included.component';

describe('CourseIncludedComponent', () => {
  let component: CourseIncludedComponent;
  let fixture: ComponentFixture<CourseIncludedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseIncludedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseIncludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
