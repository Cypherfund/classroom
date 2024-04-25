import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {PaymentsComponent} from "./pages/payments/payments.component";
import { SettingsComponent } from './settings/settings.component';
import {CourseDetailsPageComponent} from "./pages/course-details-page/course-details-page.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import { CommunicationComponent } from './components/communication/communication.component';
import { LearningRemindersComponent } from './components/learning-reminders/learning-reminders.component';
import { ReminderPopup1Component } from './components/reminder-popup1/reminder-popup1.component';
import { ReminderPopup2Component } from './components/reminder-popup2/reminder-popup2.component';
import { LearningScheduleComponent } from './components/learning-schedule/learning-schedule.component';


const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'about', component:AboutCourseComponent},
  { path: 'shopping_chart', component:ShoppingCartComponent},
  { path:'payment', component:PaymentsComponent},
  { path:'about', component: AboutCourseComponent},
  { path: 'course_detail/:id', component: CourseDetailsPageComponent},
  { path: 'settings',loadChildren: ()=> import('./settings/settings.module').then(m =>m.SettingsModule)},
  { path: 'course-admin', loadChildren: () => import('./pages/course-admin/course-admin.module').then(m => m.CourseAdminModule) },
  { path:'about', component:AboutCourseComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'courses', component: CoursesComponent},
  {path: 'communication', component: CommunicationComponent},
  { path: 'learning-reminder', component: LearningRemindersComponent},
  { path: 'reminder-popup1', component: ReminderPopup1Component},
  { path: 'reminder-popup2', component: ReminderPopup2Component},
  { path: 'learning-schedule', component: LearningScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
