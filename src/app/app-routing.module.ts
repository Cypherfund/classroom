import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";
import { CourseTabDetailsPageComponent } from './pages/course-tab-details-page/course-tab-details-page.component';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';


const routes: Routes = [
  { path:'', component: HomepageComponent},
  {path:'course-details', component:CourseTabDetailsPageComponent},
  { path:'about', component:AboutCourseComponent},
  { path: 'catalogue', component:CataloguePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
