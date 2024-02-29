import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCoursesComponent } from './carousel-courses.component';

describe('CarouselCoursesComponent', () => {
  let component: CarouselCoursesComponent;
  let fixture: ComponentFixture<CarouselCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
