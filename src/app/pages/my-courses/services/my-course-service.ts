import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';


@Injectable()
export class MyCourseService {
  currentCourse$: Observable<any>;
  currentCourseSubject$ =  new BehaviorSubject<any>(null);

    constructor() {
      this.currentCourse$ = this.currentCourseSubject$.pipe(filter(courdata => !!courdata));
    }

    setCurrentCourse(courseData: any) {
      this.currentCourseSubject$.next(courseData);
    }

    getCurrentCourse() {
      return this.currentCourseSubject$.getValue();
    }
}
