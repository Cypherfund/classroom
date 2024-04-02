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
    RouterModule.forChild(routes),
    NgForOf
  ]
})
export class CourseModule { }
