import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";


const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'about', component:AboutCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
