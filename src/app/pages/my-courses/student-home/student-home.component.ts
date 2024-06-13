import { Component } from '@angular/core';
import {CourseDetail, Enrollment} from "../../../models/course";
import {CourseService} from "../../../services/course-service/course.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss', '../../../../styles/tabs.scss']
})
export class StudentHomeComponent {
  enrolledCourses$: Observable<Enrollment[]>;

  constructor(private readonly courseService: CourseService) {
    this.enrolledCourses$ = this.courseService.enrolledCourses();
  }

  ngOnInit(): void {
    this.enrolledCourses$.subscribe((response) => {
      console.log(response);
    });
  }
}
