import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-course-admin-layout',
  templateUrl: './course-admin-layout.component.html',
  styleUrl: './course-admin-layout.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class CourseAdminLayoutComponent {
}
