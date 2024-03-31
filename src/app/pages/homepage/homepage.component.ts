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
  courseImage = appConfig.courseImage
  value: any;
  value2: any;
  studentName: string = 'Name';
  courses: Data[] = []

  constructor( private courseService: CourseService) {
  }

  ngOnInit(){
    this.getCourses()
    this.isLoggedIn()
  }

  getCourses(){
    const sub = this.courseService.getCourses().subscribe( res => {
      this.courses = res.data
    })
  }
  isLoggedIn(): boolean {
    const token = new URLSearchParams(window.location.href).get('token');
    return !!token;
  }


}
