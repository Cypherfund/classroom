import {Component, Input} from '@angular/core';
import {CourseService} from "../../services/course-service/course.service";
import {appConfig} from "../../../environments/app.config";
import {Lectures} from "../../models/course";


@Component({
  selector: 'app-carousel-courses',
  templateUrl: './carousel-courses.component.html',
  styleUrl: './carousel-courses.component.scss'
})
export class CarouselCoursesComponent {
  similarCourses: any;
  profileImage = appConfig.profileImage
  courseImage = appConfig.courseImage
  @Input() carouselType = 'courses'
  responsiveOptions: any;
  @Input() lectures: Lectures[] = []
  @Input() reviews: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.similarCourses = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
    ]

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
