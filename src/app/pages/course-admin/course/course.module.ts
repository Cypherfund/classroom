import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ButtonGroup, ButtonGroupModule } from 'primeng/buttongroup';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
  },
  {
    path: ':id',
    component: CourseEditComponent
  }
];

@NgModule({
  declarations: [CourseListComponent, CourseEditComponent, CourseFormComponent],
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    ButtonGroupModule,
    RouterModule.forChild(routes),
    NgForOf,
    FileUploadModule,
    BadgeModule,
    ToastModule
  ]
})
export class CourseModule { }
