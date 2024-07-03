import {Component, OnInit} from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CartService} from "../../services/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "./course-payment/services/payment.service";
import {PaymentApiService} from "./course-payment/services/payment-api.service";
import {tap} from "rxjs";
import {MyCourseService} from "../my-courses/services/my-course-service";
import {MyCourseApiService} from "../my-courses/services/my-course-api-service";
import {CourseService} from "../../services/course-service/course.service";
import {PaymentMethod} from "../../models/payment";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  providers: [PaymentService, PaymentApiService, MyCourseService, MyCourseApiService]
})
export class ShoppingCartComponent implements OnInit{
  profileImage = appConfig.profileImage
  selectedCourses$ = this.cartService.coursesSelected$;
  total: number = 0;
  imagebucket: string = appConfig.imagebucket;
  courseImage: string = 'course-img-2.png';
  selectedProvider!: PaymentMethod;
  paymentMethods$ = this.paymentService.providers$;

  constructor(private cartService: CartService,
              private paymentService: PaymentService,
              private courseService: CourseService) {
    this.total = cartService.getTotalPrice();
  }
  ngOnInit(): void {
    this.paymentMethods$.pipe(
      tap (providers => this.selectedProvider = providers[0])
    ).subscribe();
  }

  makePayment(paymentPayload: any): void {
    this.courseService.enrollCourse(paymentPayload.request, paymentPayload.msg);
  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
