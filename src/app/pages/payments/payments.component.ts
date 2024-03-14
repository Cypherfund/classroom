import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  imageOne = appConfig.imageOne;
  imageTwo = appConfig.imageTwo;
  imageThree = appConfig.imageThree;
  imageFour = appConfig.imageFour;

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
    });
  }
}
