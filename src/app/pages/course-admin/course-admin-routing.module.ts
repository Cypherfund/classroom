import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAdminLayoutComponent } from './course-admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CourseAdminLayoutComponent,
    children: [
      { path: 'courses', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAdminRoutingModule { }
