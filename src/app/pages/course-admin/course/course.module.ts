import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { EditorModule } from 'primeng/editor';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { MenuModule } from 'primeng/menu';
import { QuillModule } from 'ngx-quill';
import { RichTextComponent } from '../../../components/rich-text/rich-text.component';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
  },
  {
    path: ':id',
    component: CourseCreateComponent
  }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCreateComponent,
    CourseFormComponent
  ]
  ,
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
    ToastModule,
    EditorModule,
    FileUploadComponent,
    MenuModule,
    RichTextComponent
  ]
})
export class CourseModule { }
