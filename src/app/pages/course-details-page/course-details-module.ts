import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TabViewModule} from "primeng/tabview";
import {ComponentModule} from "../../components/component.module";
import {TabMenuModule} from "primeng/tabmenu";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {MyCourseService} from "../my-courses/services/my-course-service";
import {MyCourseApiService} from "../my-courses/services/my-course-api-service";
import {CourseDetailsPageComponent} from "./course-details-page.component";
import {CourseTabDetailsPageComponent} from "./course-tab-details-page/course-tab-details-page.component";
import {AboutCourseComponent} from "./course-tab-details-page/about-course/about-course.component";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ReviewsComponent} from "./course-tab-details-page/reviews/reviews.component";
import {InstructorDetailsComponent} from "./course-tab-details-page/instructor-details/instructor-details.component";
import {CourseContentComponent} from "./course-tab-details-page/course-content/course-content.component";
import {ProgressBarModule} from "primeng/progressbar";
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {
  CarouselCourseContentComponent
} from "./course-tab-details-page/course-content/carousel-course-content/carousel-course-content.component";
import {CarouselModule} from "primeng/carousel";
import {ErrorMessageComponent} from "../../components/error-message/error-message.component";
import {LoaderTemplateComponent} from "../../components/loader-template/loader-template.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {CustomPipesModule} from "../../pipe/custom-pipes.module";

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsPageComponent,
  }
];

@NgModule({
  declarations: [
    CourseDetailsPageComponent,
    CourseTabDetailsPageComponent,
    AboutCourseComponent,
    ReviewsComponent,
    InstructorDetailsComponent,
    CourseContentComponent,
    AboutCourseComponent,
    CarouselCourseContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    RatingModule,
    TabMenuModule,
    TagModule,
    TabViewModule,
    ProgressBarModule,
    ButtonModule,
    AccordionModule,
    CarouselModule,
    ErrorMessageComponent,
    LoaderTemplateComponent,
    CustomPipesModule
  ],
  providers: [MyCourseService, MyCourseApiService]
})

export class CourseDetailsModule{}
