import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
  tap,
  throwError,
  withLatestFrom
} from 'rxjs';
import {MyCourseApiService} from "./my-course-api-service";
import {CourseDetail} from "../../../models/course";
import {UserService} from "../../../services/user/user.service";


@Injectable()
export class MyCourseService {
  currentCourse$: Observable<CourseDetail>;
  currentCourseSubject$ =  new BehaviorSubject<any>(null);

  loadCurrentCourseSubject$: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private myCourseApiService: MyCourseApiService,
                private userService: UserService) {
      // Assuming you only need one observable setup, or you need to combine them appropriately
      this.currentCourse$ = this.loadCurrentCourseSubject$.pipe(
        filter(courseId => !!courseId),
        switchMap(courseId => this.userService.recheckToken().pipe(
          map(userData => [courseId, userData.userId]),
        )),
        switchMap(([ courseId, userId ]) => {
          return this.myCourseApiService.getUserCourseProgress(userId, <number>courseId);
        }),
        map(response => response.data.courseByUserAndCourse),
        tap(course => this.setCurrentCourse(course)),
        shareReplay(1),
        catchError(error => {
          // Proper error handling
          console.error('An error occurred', error);
          return throwError(() => new Error('An error occurred while fetching course details'));
        })
      );
    }

    setCurrentCourse(courseData: any) {
      this.currentCourseSubject$.next(courseData);
    }

  loadMyCourse(courseId: string) {
    // First check if the current course data is already present and matches the requested course ID
    if (!this.currentCourseSubject$.getValue() || this.currentCourseSubject$.getValue().id !== courseId) {
      this.loadCurrentCourseSubject$.next(courseId);
    }
  }
}
