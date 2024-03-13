import {Component, Input, OnInit} from '@angular/core';
import {CourseContentPayload} from "../../../models/course";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss'
})
export class CourseContentComponent implements OnInit{
 @Input() courseContent?: CourseContentPayload
  constructor() {
  }

  ngOnInit(){

  }
}
