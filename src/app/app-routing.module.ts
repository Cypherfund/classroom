import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";
import { TransactionComponent } from './components/transaction/transaction.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {CourseDetailsPageComponent} from "./pages/course-details-page/course-details-page.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentsComponent } from './pages/payments/payments.component';


const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'transaction', component: TransactionComponent},
  { path:'about', component: AboutCourseComponent},
  { path: 'course_detail/:id', component: CourseDetailsPageComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'shopping_chart', component: ShoppingCartComponent},
  { path: 'payment', component: PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
