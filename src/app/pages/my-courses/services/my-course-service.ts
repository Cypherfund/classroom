import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable, switchMap, tap} from 'rxjs';
import {MyCourseApiService} from "./my-course-api-service";


@Injectable()
export class MyCourseService {
  currentCourse$: Observable<any>;
  currentCourseSubject$ =  new BehaviorSubject<any>(null);

  loadCurrentCourse$: Observable<boolean>;
  loadCurrentCourseSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private myCourseApiService: MyCourseApiService) {
      this.currentCourse$ = this.currentCourseSubject$.pipe(filter(courdata => !!courdata));

      this.loadCurrentCourse$ = this.loadCurrentCourseSubject$.pipe(

      );
    }

    setCurrentCourse(courseData: any) {
      this.currentCourseSubject$.next(courseData);
    }

  // Method to load the course data if not already present
  loadMyCourse(userId: string, courseId: number) {
    // First check if the current course data is already present and matches the requested course ID
    if (!this.currentCourseSubject$.getValue() || this.currentCourseSubject$.getValue().id !== courseId) {
      this.myCourseApiService.getUserCourseProgress(userId, courseId).subscribe({
        next: (response) => {
          // Assuming response.data.courseById contains the course data you want to set
          if (response && response.data && response.data.courseById) {
            this.setCurrentCourse(response.data.courseById);
          }
        }
      });
    }
  }

  loadMyCourse(courseId: number) {
    // First check if the current course data is already present and matches the requested course ID
    if (!this.currentCourseSubject$.getValue() || this.currentCourseSubject$.getValue().id !== courseId) {
      this.myCourseApiService.getUserCourseProgress(userId, courseId).subscribe({
        next: (response) => {
          // Assuming response.data.courseById contains the course data you want to set
          if (response && response.data && response.data.courseById) {
            this.setCurrentCourse(response.data.courseById);
          }
        }
      });
    }
  }
}
