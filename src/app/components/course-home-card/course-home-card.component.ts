import {Component, Input} from '@angular/core';
import { CourseDetail } from '../../models/course';
import { appConfig } from '../../../environments/app.config';

@Component({
  selector: 'app-course-home-card',
  templateUrl: './course-home-card.component.html',
  styleUrl: './course-home-card.component.scss'
})
export class CourseHomeCardComponent {
  @Input() courseImage: string = '';
  instructorImage: string = appConfig.instructorImage;
  starImage: string = appConfig.starImage;
  unstarImage: string = appConfig.unstarImage;
  rating: number = 4;
  @Input() category?: string = '';
  maxRating: number = 5;
  @Input() course: CourseDetail | null = null;
  @Input() maxWidth: string = '';

  constructor() { }
  ngOnInit(){

  }
}
