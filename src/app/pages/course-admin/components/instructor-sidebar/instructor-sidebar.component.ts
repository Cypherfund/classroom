import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
enum NAV {
  Course,
  Dashboard,
  Task,
}
@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrl: './instructor-sidebar.component.scss'
})
export class InstructorSidebarComponent {
  sidebarVisible: boolean = true;
  activeNav: NAV = NAV.Course;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  // @ts-ignore
  closeCallback(e): void {
    this.sidebarRef.close(e);
  }
}
