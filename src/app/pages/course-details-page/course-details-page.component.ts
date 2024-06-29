import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course-service/course.service";
import {CourseDetail, EnrollCoursePayload} from "../../models/course";
import {appConfig} from "../../../environments/app.config";
import { Subscription } from 'rxjs';
import {UserService} from "../../services/user/user.service";
import { LoaderService } from '../../services/loader-service';

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
              private userService: UserService,
              private readonly messsageService: MessageService,
              public loaderService: LoaderService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      this.activeCourseId = params['id'];
    });
    this.getCourse()

    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
    this.items = [ { label: 'Design' }, { label: 'Product Design' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  processCourseAction(){
    if (this.course.isEnrolled){
      this.route.navigate(['/my-courses/learning', this.course.id])
      return;
    }
    if (this.course.price > 0 || this.course.discountedPrice > 0) {
      //add to cart and process paid course
      this.route.navigate(['/payment'])
    } else {
      if (this.userService.user == null) {
        this.route.navigate(['/login']);
      }
      const enrollmentRequest: EnrollCoursePayload = {
        userId: this.userService?.user?.userId,
        courseId: this.course.id
      }
      const enrollmentSubscription = this.courseService.enrollCourse(enrollmentRequest).subscribe({
        next: data => {
            if (data.success) {
              this.messsageService.add({severity:'success', summary: 'Success', detail: 'enrolled successfully'});
            } else {
              this.messsageService.add({severity:'danger', summary: 'Failed', detail: data?.message});
            }
        }
      })

      this.subscriptions.push(enrollmentSubscription);
    }
  }

  processAlternateClick(){
    this.route.navigate(['/shopping_chart'])
  }

  getCourse() {
    this.loaderService.turnOnLoading();
    this.courseService.getCourseGraphqls(this.activeCourseId).subscribe({
      next: value => this.course = value?.data?.courseById,
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
