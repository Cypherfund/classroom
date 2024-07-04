import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, filter, map, Observable, of, tap} from 'rxjs';
import {CourseDetail} from "../models/course";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private coursesSelectedSource$ = new BehaviorSubject<{ [key: number]: CourseDetail }>({});
  total$: Observable<number>;
  coursesSelected$: Observable<CourseDetail[]>;
  constructor(private messageService: MessageService) {

    this.coursesSelected$ = this.coursesSelectedSource$.asObservable().pipe(
      map(courseObject => Object.values(courseObject)),
      tap(courses => localStorage.setItem('cart', JSON.stringify(courses))),
      catchError (err => of([]))
    );

    this.total$ = this.coursesSelected$.pipe(
      map(courses => courses.reduce((sum, course) => sum + course.price, 0))
    );

  }

  addToCart(course: CourseDetail) {
    const currentCourses = this.coursesSelectedSource$.getValue();
    if (Object.keys(currentCourses).length > 0) {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'You can only add one course at a time'});
    }
    if (!currentCourses[course.id]) {
      const updatedCourses = { ...currentCourses, [course.id]: course };
      this.coursesSelectedSource$.next(updatedCourses);
    }
  }

  addCourses(courses: CourseDetail[]) {
    const currentCourses = this.coursesSelectedSource$.getValue();
    const updatedCourses = { ...currentCourses };
    courses.forEach(course => {
      if (!currentCourses[course.id]) {
        updatedCourses[course.id] = course;
      }
    });
    this.coursesSelectedSource$.next(updatedCourses);
  }

  removeFromCart(courseId: number) {
    const currentCourses = this.coursesSelectedSource$.getValue();
    const updatedCourses = { ...currentCourses };
    delete updatedCourses[courseId];
    this.coursesSelectedSource$.next(updatedCourses);
  }

  clearCart() {
    this.coursesSelectedSource$.next({});
  }
}
