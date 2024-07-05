import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseDetail, EnrollCoursePayload} from "../../models/course";
import {appConfig} from "../../../environments/app.config";
import { Subscription } from 'rxjs';
import {UserService} from "../../services/user/user.service";
import { LoaderService } from '../../services/loader-service';
import {CartService} from "../../services/cart.service";
import {CourseService} from "../../services/course-service/course.service";

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.scss'
})
export class CourseDetailsPageComponent implements OnInit, OnDestroy{
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  formGroup!: FormGroup;
  course: CourseDetail | any
  activeCourseId: number = 0;
  starImage: string = appConfig.starImage;
  unstarImage: string = appConfig.unstarImage;

  subscriptions: Subscription[] = [];
  loadError: boolean = false;
  constructor(private route: Router,
              private courseService: CourseService,
              private cartService: CartService,
              private userService: UserService,
              private readonly messsageService: MessageService,
              public loaderService: LoaderService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      this.activeCourseId = params['id'];
      this.getCourse()
    });

    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  processCourseAction(){
    if (this.course.isEnrolled){
      this.route.navigate(['/my-courses/learning', this.course.id])
      return;
    }
    if (this.course.price > 0 || this.course.discountedPrice > 0) {
      this.cartService.addToCart(this.course);
      this.route.navigate(['/checkout'])
    } else {
      if (this.userService.user == null) {
        this.route.navigate(['/login']);
      }
      const enrollmentRequest: EnrollCoursePayload = {
        userId: this.userService?.user?.userId,
        courseId: this.course.id
      }
      this.courseService.enrollCourse(enrollmentRequest, 'Enrollment Successful');
    }
  }

  processAlternateClick(){
    if (!this.course?.isEnrolled) {
      this.cartService.addToCart(this.course);
      this.route.navigate(['/checkout'])
    } else {

    }
  }

  getCourse() {
    this.loaderService.turnOnLoading();
    this.courseService.getCourseGraphqls(this.activeCourseId).subscribe({
      next: value =>  {
        this.course = value?.data?.courseById
        this.cartService.addToCart(this.course)
        this.items = [ { label: this.course?.category?.name}, { label: this.course?.name }];

      },
      error: () => {
        this.loaderService.turnOffLoading()
        this.loadError = true;
      },
      complete: () => this.loaderService.turnOffLoading()
    })
  }

  ngOnDestroy(): void {
  }


  handleRetry() {
    this.getCourse();
  }
}
