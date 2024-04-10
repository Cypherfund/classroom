import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CourseService} from "../../services/course-service/course.service";
import {Courses, Data} from "../../models/course";
<<<<<<< HEAD
import { UserService } from '../../services/user/user.service';
=======
import {Router} from "@angular/router";
>>>>>>> 3e2d245e363e16e91e1428a60b4173f64cecd9bb

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

  constructor( private courseService: CourseService,
<<<<<<< HEAD
               private userService: UserService) {
=======
               private router: Router) {
>>>>>>> 3e2d245e363e16e91e1428a60b4173f64cecd9bb
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
    return !!Object.keys(this.userService.user).length;
  }

  search(): void {
    this.router.navigate(['/courses'], { queryParams: { category: this.value } });
  }

}
