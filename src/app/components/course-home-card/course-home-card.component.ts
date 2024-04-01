import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-home-card',
  templateUrl: './course-home-card.component.html',
  styleUrl: './course-home-card.component.scss'
})
export class CourseHomeCardComponent {
  @Input() courseImage: string = '';
  @Input() courseTitle?: string = '';
  @Input() courseProvider?: any = '';
  @Input() rating?: number = 0;
  @Input() ratingCount?: any = 0;
  @Input() coursePrice?: any = 0;
  maxRating: number = 5;
  @Input() navigationLink: string = '';

  constructor() { }
  ngOnInit(){

  }
}
