import { Component } from '@angular/core';
import {CourseService} from "../../services/course-service/course.service";
import {  CourseDetail } from '../../models/course';
import {Router} from "@angular/router";
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  value: any;
  studentName: string = 'Name';
  courses: CourseDetail[] = []
  upcomingCourses: CourseDetail[] = []
  responsiveOptions: any[] | undefined;
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
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '400px',
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
