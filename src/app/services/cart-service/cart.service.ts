import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private courses: any[] = [];
  private totalPayment = 50;

  constructor() {}

  // Add a course to the cart
  addToCart(course: any) {
    console.log(this.courses);
    console.log(this.courses.indexOf(course));
    if (this.courses.indexOf(course)==-1) {
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

  //get the total price
  getTotal(){
    this.courses.forEach(course => {
      this.totalPayment = this.totalPayment + course.price;
    });
    return this.totalPayment;
  }
}
