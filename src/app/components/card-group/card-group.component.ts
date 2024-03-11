import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrl: './card-group.component.scss'
})
export class CardGroupComponent {
    // coursegroup: any | undefined;
    course: any |undefined;

    constructor(){}

    ngOnInit(): void {
      this.course = {
      courseId: 1,
      title: "Java Programming",
      description: "Learn Java basics",
      instructor: "Dirane Tester",
      categoryId: 1,
      price: 99.99,
      discountedPrice: 49.99,
      startDate: "2024-03-03T16:19:43.439+00:00",
      endDate: "2024-03-03T16:19:43.439+00:00"
      };

      // this.coursegroup = {
      //   course1: this.course,
      //   course2: this.course,
      //   course3: this.course,
      //   course4: this.course,
      // }
    }
}
