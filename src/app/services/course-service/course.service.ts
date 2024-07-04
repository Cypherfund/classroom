import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, map, Observable, shareReplay, switchMap, tap} from 'rxjs';
import {CourseDetail, Courses, EnrollCoursePayload, Enrollment} from "../../models/course";
import {CourseApiService} from "./course-api.service";
import {MessageService} from "primeng/api";
import {LoaderService} from "../loader-service";
import { CartService } from '../cart.service';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  enrolledCourses$: Observable<Enrollment[]>;
  courses$: Observable<CourseDetail[]>;
  coursesSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  upcoming$: Observable<CourseDetail[]>;
  upcomingSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  trending$: Observable<CourseDetail[]>;
  trendingSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  processing$: Observable<boolean>;
  processingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private courseApiService: CourseApiService,
              private loaderService: LoaderService,
              private cartService: CartService,
              private stoarageService: LocalStorageService,
              private messageService: MessageService) {
    this.enrolledCourses$ = this.enrolledCourses().pipe(
      tap( courses => {
        const cartItems = this.stoarageService.get('cart');
        if (!!cartItems && cartItems.length > 0) {
          courses.forEach( course => this.cartService.removeFromCart(course.courseId))
        }
      }),
      shareReplay(1)
    );
    this.processing$ = this.processingSubject$.asObservable();

    this.courses$ = this.coursesSubject$.pipe(
      distinctUntilChanged(),
      switchMap(category => {
        return this.getCourses(category)
      }),
      map(courseResponse => courseResponse.data),
      shareReplay(1)
    );

    this.upcoming$ = this.upcomingSubject$.pipe(
      distinctUntilChanged(),
      switchMap(category => {
        return this.getUpcoming(category)
      }),
      map(courseResponse => courseResponse.data),
      shareReplay(1)
    );

    this.trending$ = this.trendingSubject$.pipe(
      distinctUntilChanged(),
      switchMap(category => {
        return this.getTrending(category)
      }),
      map(courseResponse => courseResponse.data),
      shareReplay(1)
    );
  }

  getCourses(categoryName: string = ''): Observable<Courses>{
    return this.courseApiService.getCourses(categoryName);
  }

  getTrending(categoryName: string = ''): Observable<Courses>{
    return this.courseApiService.getCourses(categoryName);
  }

  getUpcoming(categoryName: string = ''): Observable<Courses>{
    return this.courseApiService.getCourses(categoryName);
  }

  getCourseGraphqls(id: number): Observable<any>{
    return this.courseApiService.getCourseGraphqls(id);
  }

  enrollCourse(enrollmentRequest: EnrollCoursePayload, successMsg: string): void{
    this.processingSubject$.next(true);
    this.messageService.clear()
    this.courseApiService.enrollCourse(enrollmentRequest).subscribe(
      {
        next: value => {
          if (value.success) {
            this.showSuccess(successMsg);
          } else {
            this.showError(value.message)
          }
        },
        error: err => this.showError('An error occured try again later'),
        complete: () => this.processingSubject$.next(false)
      }
    );
  }

  enrolledCourses(): Observable<Enrollment[]>{
    return this.courseApiService.enrolledCourses();
  }

  showSuccess(detail:string) {
    const content = {severity:'success', summary: 'Success', detail: detail};
    this.messageService.add(content);
  }

  showError(detail:string) {
    const content = {severity:'error', summary: 'Error', detail: detail};
    this.messageService.add(content);
  }

  showWarning(detail:string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: detail});
  }
}
