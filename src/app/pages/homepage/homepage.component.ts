import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CourseService} from "../../services/course-service/course.service";
import {  Courses, CourseDetail } from '../../models/course';
import {Router} from "@angular/router";
import { UserService } from '../../services/user/user.service';

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
  courses: CourseDetail[] = []
  upcomingCourses: CourseDetail[] = []
  responsiveOptions: any[] | undefined;
  maxRating: number = 5;
  constructor( private courseService: CourseService,
               private router: Router,
               private userService: UserService) {

  }

  ngOnInit(){
    this.configureScrollingOptions();
    this.getCourses()
    this.isLoggedIn()
  }

  private configureScrollingOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getCourses(){
    const sub = this.courseService.getCourses().subscribe( res => {
      this.courses = res.data
      this.upcomingCourses = Array.from({ length: 2 }, () => this.courses).flat();
    })
  }
  isLoggedIn(): boolean {
    return !!Object.keys(this.userService.user).length;
  }

  search(): void {
    this.router.navigate(['/courses'], { queryParams: { category: this.value } });
  }

}
