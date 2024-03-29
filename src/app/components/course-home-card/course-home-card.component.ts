import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-home-card',
  templateUrl: './course-home-card.component.html',
  styleUrl: './course-home-card.component.scss'
})
export class CourseHomeCardComponent {
  @Input() courseImage: string = '';
  @Input() courseTitle: string = '';
  @Input() courseProvider: string = '';
  @Input() rating: number = 0;
  @Input() ratingCount: number = 0;
  @Input() coursePrice: string = '';
  maxRating: number = 5;
  @Input() navigationLink: string = '';

  constructor() { }
  ngOnInit(){

  }
}
