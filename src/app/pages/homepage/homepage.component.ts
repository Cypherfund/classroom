import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CourseService} from "../../services/course-service/course.service";
import {Courses, Data} from "../../models/course";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  valueRating4= 4;
  courseImage = appConfig.courseImage
  value: any;
  value2: any;
  studentName: string = 'Name';
  courses: Data[] = []

  constructor( private courseService: CourseService) {
  }

  ngOnInit(){
    this.getCourses()
  }
  getCourses(){
    const sub = this.courseService.getCourses().subscribe( res => {
      console.log(res.data)
      this.courses = res.data
    })
  }

}
