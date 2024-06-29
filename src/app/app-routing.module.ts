import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {CoursesComponent} from "./pages/homepage/components/courses/courses.component";


const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'transaction', component: TransactionComponent},
  { path: 'course-detail/:id', loadChildren: () => import('./pages/course-details-page/course-details-module').then(m => m.CourseDetailsModule)},
  { path: 'settings', component: SettingsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'course-admin', loadChildren: () => import('./pages/course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
  { path: 'my-courses', loadChildren: () => import('./pages/my-courses/my-courses.module').then(m => m.MyCoursesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
