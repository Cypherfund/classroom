import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, catchError, filter, map, Observable, of} from 'rxjs';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './localstorage/local-storage.service';
import {CourseDetail} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private coursesSelectedSource$ = new BehaviorSubject<{ [key: number]: CourseDetail }>({});
  coursesSelected$: Observable<CourseDetail[]> = this.coursesSelectedSource$.asObservable().pipe(
    filter(courses => !!courses),
    map(courseObject => Object.values(courseObject)),
    catchError (err => of([]))
  );

  constructor() { }

  addToCart(course: CourseDetail) {
    const currentCourses = this.coursesSelectedSource$.getValue();
    if (!currentCourses[course.id]) {
      const updatedCourses = { ...currentCourses, [course.id]: course };
      this.coursesSelectedSource$.next(updatedCourses);
    }
  }

  getTotalPrice() {
    return Object.values(this.coursesSelectedSource$.getValue()).reduce((sum, course) => sum + course.price, 0);
  }

  removeFromCart(courseId: number) {
    const currentCourses = this.coursesSelectedSource$.getValue();
    const updatedCourses = { ...currentCourses };
    delete updatedCourses[courseId];
    this.coursesSelectedSource$.next(updatedCourses);
  }

  clearCart() {
    this.coursesSelectedSource$.next([]);
  }
}
