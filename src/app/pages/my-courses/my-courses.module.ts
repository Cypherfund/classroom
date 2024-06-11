import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { StudentHomeComponent } from './student-home/student-home.component';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {ProgressBarModule} from "primeng/progressbar";
import {ComponentModule} from "../../components/component.module";
import {ButtonModule} from "primeng/button";

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent,
  },
];

@NgModule({
  declarations: [
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    TabViewModule,
    ProgressBarModule,
    ComponentModule,
    ButtonModule
  ]
})
export class MyCoursesModule { }
