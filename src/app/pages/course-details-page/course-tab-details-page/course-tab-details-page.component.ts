import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";
import {
  AboutPayload,
  CourseContentSummary,
  CourseDetail,
  InstructorDetails
} from "../../../models/course";

@Component({
  selector: 'app-course-tab-details-page',
  templateUrl: './course-tab-details-page.component.html',
  styleUrl: './course-tab-details-page.component.scss'
})
export class CourseTabDetailsPageComponent {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  aboutResponse: AboutPayload | any;
  courseContentResponse: CourseContentSummary | any;
  instructorDetailsResponse: InstructorDetails | any;
  @Input() course: CourseDetail | any;

  activeIndex: number = 3

  constructor() {
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
    if (this.course) {
      this.aboutResponse = {
        duration: this.course.duration,
        courseTopics: [{description: "", topic: ""}],
        hasCompletionCertificate: this.course.issueCertificate,
        hasRealWorldProjects: this.course.hasRealWorldProjects,
        level:  this.course.level,
        updatedOn: new Date(),
        about: this.course.about
      }
      this.courseContentResponse = this.course.contentSummary
      this.instructorDetailsResponse = {
        name: this.course.instructors?.instructorName,
        profession: this.course.instructors?.profession,
        perks: [
          {
            rating: this.course.instructors?.instructorRating,
            numberOfCourses: this.course.instructors?.numberOfCourses,
            numberOfStudents: this.course.instructors?.numberOfStudents,
            yearsOfExperience: this.course.instructors?.yearsOfExperience
          }],
        description: this.course?.instructor?.bio,
        profilePicture: this.course.instructors?.profilePicture
      }
      // Waiting for ratings and reviews to be included in the course payload
      // this.courseRatingsAndReviewsResponse = this.course.ratingsAndReviews
      // });
    }
  }
}
