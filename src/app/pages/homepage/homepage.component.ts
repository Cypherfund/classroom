import { Component } from '@angular/core';
import {  CourseDetail } from '../../models/course';
import {Router} from "@angular/router";
import { UserService } from '../../services/user/user.service';
import { LoaderService } from '../../services/loader-service';
import {TabViewChangeEvent} from "primeng/tabview";
import {CourseService} from "../../services/course-service/course.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  value: any;
  categoryTabs = ['All', 'Technology', 'Science', 'Business', 'Arts', 'Languages'];

  courses$ = this.courseService.courses$;
  upcoming$ = this.courseService.upcoming$;
  trending$ = this.courseService.trending$;

  responsiveOptions: any[] | undefined;
  constructor( private courseService: CourseService,
               private router: Router,
               private loaderService: LoaderService,
               public userService: UserService) {

  }

  ngOnInit(){
    this.configureScrollingOptions();
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


  fetchCourseCategory(event: TabViewChangeEvent) {
    this.courseService.getCourses(event.index === 0 ? '': this.categoryTabs[event.index]);
  }

  isLoggedIn(): boolean {
    return !!Object.keys(this.userService.user).length;
  }

  search(): void {
    this.router.navigate(['/courses'], { queryParams: { category: this.value } });
  }

}
