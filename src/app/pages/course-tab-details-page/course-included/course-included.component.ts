import {Component, Input, OnInit} from '@angular/core';
import {CourseDetail} from "../../../models/course";

@Component({
  selector: 'app-course-included',
  templateUrl: './course-included.component.html',
  styleUrl: './course-included.component.scss'
})
export class CourseIncludedComponent implements OnInit{

  @Input() courseIncludePayload: CourseDetail[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }
}
