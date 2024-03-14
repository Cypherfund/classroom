import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { MessageService } from 'primeng/api';
import {RatingsAndReviews} from "../../../models/course";


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  formGroup!: FormGroup;
  value: number = 0;
  @Input() ratingsAndReviews: RatingsAndReviews | any;
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
    console.log(this.ratingsAndReviews)
  }

}
