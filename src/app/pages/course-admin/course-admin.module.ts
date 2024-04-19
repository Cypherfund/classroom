import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseAdminLayoutComponent } from './course-admin-layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InstructorSidebarComponent } from './components/instructor-sidebar/instructor-sidebar.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CourseModule } from './course/course.module';
import { ComponentModule } from '../../components/component.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CourseAdminLayoutComponent,
    InstructorSidebarComponent
  ],
  imports: [
    CommonModule,
    CourseAdminRoutingModule,
    CourseModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    ComponentModule

  ]
})
export class CourseAdminModule { }
