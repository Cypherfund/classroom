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

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent,
  },
  {
    path: 'learning',
    component: LearningComponent
  }
];

@NgModule({
  declarations: [
    StudentHomeComponent,
    LearningComponent
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
    AvatarModule
  ]
})
export class MyCoursesModule { }
