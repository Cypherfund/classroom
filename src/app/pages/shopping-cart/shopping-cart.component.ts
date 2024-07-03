import {Component, OnInit} from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CartService} from "../../services/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "./course-payment/services/payment.service";
import {PaymentApiService} from "./course-payment/services/payment-api.service";
import {Observable, tap} from "rxjs";
import {MyCourseService} from "../my-courses/services/my-course-service";
import {MyCourseApiService} from "../my-courses/services/my-course-api-service";
import {CourseService} from "../../services/course-service/course.service";
import {PaymentMethod} from "../../models/payment";
import {UserService} from "../../services/user/user.service";
import {CourseDetail} from "../../models/course";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  providers: [PaymentService, PaymentApiService, MyCourseService, MyCourseApiService]
})
export class ShoppingCartComponent implements OnInit{
  selectedCourses$: Observable<CourseDetail[]>;
  total$ = this.cartService.total$;
  paymentMethods$: Observable<PaymentMethod[]>;
  processing$ = this.courseService.processing$;

  imagebucket: string = appConfig.imagebucket;
  courseImage: string = 'course-img-2.png';
  profileImage = appConfig.profileImage

  selectedProvider!: PaymentMethod;
  course: CourseDetail | any;

  constructor(private cartService: CartService,
              private paymentService: PaymentService,
              private userService: UserService,
              private courseService: CourseService) {
    this.paymentMethods$ = this.paymentService.providers$.pipe(
      tap (providers => this.selectedProvider = providers[0])
    );

    this.selectedCourses$ = this.cartService.coursesSelected$.pipe(
      tap(courses => this.course = courses[0])
    );
  }
  ngOnInit(): void {
  }

  makePayment(paymentPayload: any): void {
    paymentPayload.request.courseId = this.course.id;
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
