import { Injectable } from '@angular/core';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private courses: any[] = [];

  constructor() {}

  // Add a course to the cart
  addToCart(course: any) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
    }
  }

  // Get the courses in the cart
  getCartCourses() {
    return this.courses;
  }

  //Remove a course from the cart
  removeFromCart(index: number){
      this.courses.splice(index);
  }
}
