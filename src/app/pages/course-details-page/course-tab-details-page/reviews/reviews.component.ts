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
  _ratingsAndReviews: ReviewSummary | any;

  onePercentage = 0;
  twoPercentage = 0;
  threePercentage = 0;
  fourPercentage = 0;
  fivePercentage = 0;

  @Input() set ratingsAndReviews(ratingsAndReviews: ReviewSummary) {
    this._ratingsAndReviews = ratingsAndReviews;
    if (!!ratingsAndReviews) {
        this.onePercentage = (ratingsAndReviews.totalOnes || 0) / (ratingsAndReviews.totalReviews || 0) * 100;
        this.twoPercentage = (ratingsAndReviews.totalTwos || 0) / (ratingsAndReviews.totalReviews || 0) * 100;
        this.threePercentage = (ratingsAndReviews.totalThrees || 0) / (ratingsAndReviews.totalReviews || 0) * 100;
        this.fourPercentage = (ratingsAndReviews.totalFours || 0) / (ratingsAndReviews.totalReviews || 0) * 100;
        this.fivePercentage = (ratingsAndReviews.totalFives || 0) / (ratingsAndReviews.totalReviews || 0) * 100;
    }
  }
  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
  }

}
