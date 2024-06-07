import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { MessageService } from 'primeng/api';
import { ReviewSummary } from '../../../../models/course';
import { appConfig } from '../../../../../environments/app.config';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  formGroup!: FormGroup;
  value: number = 0;
  starImage: string = appConfig.starImage;
  unstarImage: string = appConfig.unstarImage;
  @Input() ratingsAndReviews: ReviewSummary | any;
  valueRating5: number = 5;
  valueRating4: number = 4;
  valueRating3: number = 3;
  valueRating2: number = 2;
  valueRating1: number = 1;



  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
  }

}
