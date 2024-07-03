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
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  providers: [PaymentService, PaymentApiService, MyCourseService, MyCourseApiService]
})
export class ShoppingCartComponent implements OnInit{
  selectedCourses$ = this.cartService.coursesSelected$;
  total$ = this.cartService.total$;
  paymentMethods$ = this.paymentService.providers$;
  processing$ = this.courseService.processing$;

  imagebucket: string = appConfig.imagebucket;
  courseImage: string = 'course-img-2.png';
  profileImage = appConfig.profileImage

  selectedProvider!: PaymentMethod;

  constructor(private cartService: CartService,
              private paymentService: PaymentService,
              private userService: UserService,
              private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.paymentMethods$.pipe(
      tap (providers => this.selectedProvider = providers[0])
    ).subscribe();
  }

  makePayment(paymentPayload: any): void {
    paymentPayload.request.courseId = 2;
    paymentPayload.request.userId = this.userService.user.userId;
    this.courseService.enrollCourse(paymentPayload.request, paymentPayload.msg);
  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
