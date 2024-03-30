import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModel } from './course.model';

describe('CourseModel', () => {
  let component: CourseModel;
  let fixture: ComponentFixture<CourseModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseModel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
