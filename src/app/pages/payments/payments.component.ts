import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart-service/cart.service';

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

  courses: any[] = [];

  formGroup!: FormGroup;
  total: any;
  subtotal: any;
  discount = 0;
  tax = 0;

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
    });
    this.courses = this.cartService.getCartCourses();
    this.subtotal = this.cartService.getTotal();
    this.total = this.subtotal + this.discount + this.tax;
  }
}
