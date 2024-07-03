import { Component } from '@angular/core';
import { Enrollment} from "../../../models/course";
import {CourseApiService} from "../../../services/course-service/course-api.service";
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import {CourseService} from "../../../services/course-service/course.service";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss', '../../../../styles/tabs.scss']
})
export class StudentHomeComponent {
  enrolledCourses$: Observable<Enrollment[]> = this.courseService.enrolledCourses$;

  constructor(private readonly courseService: CourseService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToOverview(courseId: number) {
    this.router.navigate(['/my-courses/overview', courseId])
  }

  navigateToLearning(courseId: number) {
    this.router.navigate(['/my-courses/learning', courseId]);
  }
}
