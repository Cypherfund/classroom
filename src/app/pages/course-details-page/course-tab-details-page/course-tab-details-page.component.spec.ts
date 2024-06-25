import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTabDetailsPageComponent } from './course-tab-details-page.component';

describe('CourseTabDetailsPageComponent', () => {
  let component: CourseTabDetailsPageComponent;
  let fixture: ComponentFixture<CourseTabDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTabDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTabDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
