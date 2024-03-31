import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { CourseAdminLayoutComponent } from './course-admin-layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InstructorSidebarComponent } from './components/instructor-sidebar/instructor-sidebar.component';
import { OrderListModule } from 'primeng/orderlist';
import { RippleModule } from 'primeng/ripple';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { TreeModule } from 'primeng/tree';
import { StyleClassModule } from 'primeng/styleclass';


@NgModule({
  declarations: [
    DashboardComponent,
    CourseComponent,
    CourseAdminLayoutComponent,
    InstructorSidebarComponent
  ],
  imports: [
    CommonModule,
    CourseAdminRoutingModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule

  ]
})
export class CourseAdminModule { }
