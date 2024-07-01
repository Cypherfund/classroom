import {RouterModule, Routes} from "@angular/router";
import {CourseDetailsPageComponent} from "../course-details-page/course-details-page.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ComponentModule} from "../../components/component.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ErrorMessageComponent} from "../../components/error-message/error-message.component";
import {LoaderTemplateComponent} from "../../components/loader-template/loader-template.component";
import {CustomPipesModule} from "../../pipe/custom-pipes.module";
import {MyCourseService} from "../my-courses/services/my-course-service";
import {MyCourseApiService} from "../my-courses/services/my-course-api-service";
import {ShoppingCartComponent} from "./shopping-cart.component";

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsPageComponent,
  }
];

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    ErrorMessageComponent,
    LoaderTemplateComponent,
    CustomPipesModule
  ],
  providers: [MyCourseService, MyCourseApiService]
})
export class ShoppingCartModule{

}
