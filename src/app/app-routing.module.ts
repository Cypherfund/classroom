import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {PaymentsComponent} from "./pages/payments/payments.component";
import { TransactionComponent } from './components/transaction/transaction.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { CourseComponent } from './pages/course-tab-details-page/instructor-details/course/course.component';
import {CourseDetailsPageComponent} from "./pages/course-details-page/course-details-page.component";


const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'about', component:AboutCourseComponent},
  { path:'shopping_chart', component:ShoppingCartComponent},
  { path:'payment', component:PaymentsComponent},
  { path:'transaction', component: TransactionComponent},
  { path:'about', component: AboutCourseComponent},
  { path: 'course_detail/:id', component: CourseDetailsPageComponent},
  { path: 'settings', component: SettingsComponent},
  { path:'account', component:AccountComponent},
  { path:'course', component:CourseComponent},
  { path: 'course-admin', loadChildren: () => import('./pages/course-admin/course-admin.module').then(m => m.CourseAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
