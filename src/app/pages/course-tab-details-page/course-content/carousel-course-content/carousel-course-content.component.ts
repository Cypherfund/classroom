import {Component, Input, OnInit} from '@angular/core';
import {Lectures} from "../../../../models/course";

@Component({
  selector: 'app-carousel-course-content',
  templateUrl: './carousel-course-content.component.html',
  styleUrl: './carousel-course-content.component.scss'
})
export class CarouselCourseContentComponent implements OnInit {
  @Input() lectures: Lectures[] | any;
  responsiveOptions: any;
  constructor() {
  }

  ngOnInit(){
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

  trackLectureById(index: number, lecture: Lectures) {
    return lecture.lectureId;
  }

}
