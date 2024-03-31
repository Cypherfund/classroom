import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrl: './instructor-sidebar.component.scss'
})
export class InstructorSidebarComponent {
  sidebarVisible: boolean = true;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  // @ts-ignore
  closeCallback(e): void {
    this.sidebarRef.close(e);
  }
}
