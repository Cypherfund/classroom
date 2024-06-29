import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SeeMoreTextComponent } from './see-more-text/see-more-text.component';
import {CarouselCoursesComponent} from "./carousel-courses/carousel-courses.component";
import {RatingModule} from "primeng/rating";
import {CarouselModule} from "primeng/carousel";
import {CourseHomeCardComponent} from "./course-home-card/course-home-card.component";
import {FooterComponent} from "./footer/footer.component";
import {CardModule} from "primeng/card";
import {AvatarModule} from "primeng/avatar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
    SeeMoreTextComponent,
    CarouselCoursesComponent,
    CourseHomeCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    ButtonModule,
    RatingModule,
    CarouselModule,
    CardModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SeeMoreTextComponent,
    CarouselCoursesComponent,
    CourseHomeCardComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
