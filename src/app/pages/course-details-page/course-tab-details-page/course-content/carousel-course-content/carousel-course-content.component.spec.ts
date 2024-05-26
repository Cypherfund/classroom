import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCourseContentComponent } from './carousel-course-content.component';

describe('CarouselCourseContentComponent', () => {
  let component: CarouselCourseContentComponent;
  let fixture: ComponentFixture<CarouselCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselCourseContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
