import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseDetail, Courses, Enrollment } from '../../../models/course';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnDestroy, OnInit{
  @Input() course: Partial<CourseDetail>;
  @Input() enrollment: Partial<Enrollment>;

  hasSubcourses = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.course = {}
    this.enrollment = {}
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }

  ngOnInit(): void {
    this.document.body.classList.add('no-scroll');
  }

}
