import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {CourseService} from "../../services/course-service/course.service";
import {
  AboutPayload,
  CourseContentPayload,
  CourseDetail,
  InstructorDetails,
  RatingsAndReviews
} from "../../models/course";

@Component({
  selector: 'app-course-tab-details-page',
  templateUrl: './course-tab-details-page.component.html',
  styleUrl: './course-tab-details-page.component.scss'
})
export class CourseTabDetailsPageComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;
  aboutResponse: AboutPayload | any;
  description: string  | any = "";
  courseContentResponse: CourseContentPayload | any;
  courseIncludeResponse: CourseDetail[]  | any = [] ;
  instructorDetailsResponse: InstructorDetails | any;
  courseRatingsAndReviewsResponse: RatingsAndReviews  | any;


  constructor(private route: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    this.items = [
      { label: 'About'},
      { label: 'Course Content' },
      { label: 'Whats Included' },
      { label: 'Instructor(s)' },
      { label: 'Reviews' }
    ];

    this.activeItem = this.items[0];
    this.getCourse()
  }

  getCourse() {
    this.courseService.getCourses().subscribe((course) => {
      this.aboutResponse = course[0].about
      this.description = course[0].description
      this.courseContentResponse = course[0].courseContent
      this.courseIncludeResponse = course[0].courseInclude
      this.instructorDetailsResponse = course[0].instructorDetails
      this.courseRatingsAndReviewsResponse = course[0].ratingsAndReviews
      console.log(this.courseRatingsAndReviewsResponse)
    });
  }
}
