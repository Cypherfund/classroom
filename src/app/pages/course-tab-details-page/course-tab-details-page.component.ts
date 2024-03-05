import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-course-tab-details-page',
  templateUrl: './course-tab-details-page.component.html',
  styleUrl: './course-tab-details-page.component.scss'
})
export class CourseTabDetailsPageComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'About'},
      { label: 'Course Content' },
      { label: 'Whats Included' },
      { label: 'Instructor(s)' },
      { label: 'Reviews' }
    ];

    this.activeItem = this.items[0];
  }
}
