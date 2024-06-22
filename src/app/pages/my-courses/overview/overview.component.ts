import { Component, Input } from '@angular/core';
import { CourseDetail, Courses, Enrollment } from '../../../models/course';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  @Input() course: Partial<CourseDetail>;
  @Input() enrollment: Partial<Enrollment>;

  hasSubcourses = true;

  constructor() {
    this.course = {}
    this.enrollment = {}
  }

}
