import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { StudentHomeComponent } from './student-home/student-home.component';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {ProgressBarModule} from "primeng/progressbar";
import {ComponentModule} from "../../components/component.module";
import {ButtonModule} from "primeng/button";
import { LearningComponent } from './learning/learning.component';
import {ToggleButtonModule} from "primeng/togglebutton";
import {TabMenuModule} from "primeng/tabmenu";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {MenubarModule} from "primeng/menubar";
import {LessonPartComponent} from "./learning/lesson-part/lesson-part.component";
import {SidebarModule} from "primeng/sidebar";
import {AvatarModule} from "primeng/avatar";
import { OverviewComponent } from './overview/overview.component';
import { MyCourseService } from './services/my-course-service';
import { MyCourseApiService } from './services/my-course-api-service';
import { ChipModule } from 'primeng/chip';
import { TopicComponent } from './overview/topic/topic.component';
import { AccordionModule } from 'primeng/accordion';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent,
  },
  {
    path: 'learning/:courseId',
    component: LearningComponent
  },
  {
    path: 'overview/:courseId',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [
    StudentHomeComponent,
    LearningComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    TabViewModule,
    ProgressBarModule,
    ComponentModule,
    ButtonModule,
    ToggleButtonModule,
    TabMenuModule,
    BreadcrumbModule,
    MenubarModule,
    LessonPartComponent,
    SidebarModule,
    AvatarModule,
    ChipModule,
    TopicComponent,
    AccordionModule
  ],
  providers: [MyCourseService, MyCourseApiService]
})
export class MyCoursesModule { }
