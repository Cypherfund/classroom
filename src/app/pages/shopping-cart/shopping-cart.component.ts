import {Component, OnInit} from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CartService} from "../../services/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "./course-payment/services/payment.service";
import {PaymentApiService} from "./course-payment/services/payment-api.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  providers: [PaymentService, PaymentApiService]
})
export class ShoppingCartComponent implements OnInit{
  profileImage = appConfig.profileImage
  selectedCourses$ = this.cartService.coursesSelected$;
  paymentForm: FormGroup;
  imagebucket: string = appConfig.imagebucket;
  courseImage: string = 'course-img-2.png';
  selectedProvider!: string;
  paymentMethods$ = this.paymentService.providers$;

  constructor(private cartService: CartService,
              private paymentService: PaymentService,
              private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      saveInfo: [false]
    });
  }
  ngOnInit(): void {
    this.paymentMethods$.pipe(
      tap (providers => this.selectedProvider = providers[0].strProviderName)
    ).subscribe();
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log('Form Submitted!', this.paymentForm.value);
      // Process the payment here
    }
  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
