import { Component } from '@angular/core';
import { Enrollment} from "../../../models/course";
import {CourseService} from "../../../services/course-service/course.service";
import {Observable} from "rxjs";
import { MyCourseService } from '../services/my-course-service';
import { Router } from '@angular/router';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss', '../../../../styles/tabs.scss']
})
export class StudentHomeComponent {
  enrolledCourses$: Observable<Enrollment[]>;

  constructor(private readonly courseService: CourseService,
              private readonly router: Router) {
    this.enrolledCourses$ = this.courseService.enrolledCourses();
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
