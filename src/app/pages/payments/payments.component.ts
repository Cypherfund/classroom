import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart-service/cart.service';
import { PaymentService } from '../../services/payment-service/payment.service';

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
  imageFive = appConfig.imageFive;

  courses: any;
  countryCode = 'cmr';
  selectedMethod = 'MOBILE_WALLET';

  momoForm = {
    "userId": "",
    "courseId": 0,
    "paymentMethod": this.selectedMethod,
    "paymentCode": "",
    "phn": "",
  }

  formGroup!: FormGroup;
  total: any;
  subtotal: any;
  discount = 0;
  tax = 0;

  constructor(private cartService: CartService,
              private paymentService: PaymentService){}

  ngOnInit() {
    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
    });
    // this.courses = this.cartService.getCartCourses();
    // this.subtotal = this.cartService.getTotal();
    this.courses = this.paymentService.getCourse();
    this.subtotal = this.courses.price;
    this.discount = this.courses.discountedPrice;
    this.total = this.subtotal + this.discount;

    this.momoForm.courseId = this.courses.id;
    this.paymentService.getProviderDetails("cmr").subscribe( res => {
      console.log(res.data[0].strPaymentCode);
      this.momoForm.paymentCode = res.data[0].strPaymentCode;
    })
  }

  pay() {
    console.log("clicked");
    this.paymentService.enrollToCourseByMomo(this.momoForm);
    console.log("correct");
  }
}
