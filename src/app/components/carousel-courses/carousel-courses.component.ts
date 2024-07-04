import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CourseApiService } from '../../services/course-service/course-api.service';
import { appConfig } from '../../../environments/app.config';
import { CourseDetail, Lectures } from '../../models/course';
import {CourseService} from "../../services/course-service/course.service";


@Component({
  selector: 'app-carousel-courses',
  templateUrl: './carousel-courses.component.html',
  styleUrl: './carousel-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselCoursesComponent {
  similarCourses$ = this.courseService.courses$; //todo find similar courses
  profileImage = appConfig.profileImage
  imagebucket: string = appConfig.imagebucket;
  @Input() carouselType = 'courses'
  responsiveOptions: any;
  @Input() lectures: Lectures[] = []
  @Input() reviews: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
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

   getMonthsAgo(timestamp: string): number {
    const currentDate = new Date();
    const givenDate = new Date(timestamp);

    const yearsDiff = currentDate.getFullYear() - givenDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - givenDate.getMonth();

    return yearsDiff * 12 + monthsDiff;
  }

}
