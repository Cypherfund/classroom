import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-course-admin-layout',
  templateUrl: './course-admin-layout.component.html',
  styleUrl: './course-admin-layout.component.scss'
})
export class CourseAdminLayoutComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  // @ts-ignore
  closeCallback(e): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
