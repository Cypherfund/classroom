import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { CourseAdminLayoutComponent } from './course-admin-layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DashboardComponent,
    CourseComponent,
    CourseAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    CourseAdminRoutingModule,
    SidebarModule,
    AvatarModule,
    ButtonModule
  ]
})
export class CourseAdminModule { }
