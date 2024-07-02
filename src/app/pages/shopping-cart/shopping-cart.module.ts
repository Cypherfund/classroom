import {RouterModule, Routes} from "@angular/router";
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
import { CoursePaymentComponent } from './course-payment/course-payment.component';
import { MobilePaymentFormComponent } from './course-payment/components/mobile-payment-form/mobile-payment-form.component';
import { CardPaymentFormComponent } from './course-payment/components/card-payment-form/card-payment-form.component';
import { PaypalPaymentFormComponent } from './course-payment/components/paypal-payment-form/paypal-payment-form.component';
import { CryptoPaymentFormComponent } from './course-payment/components/crypto-payment-form/crypto-payment-form.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
];

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CoursePaymentComponent,
    MobilePaymentFormComponent,
    CardPaymentFormComponent,
    PaypalPaymentFormComponent,
    CryptoPaymentFormComponent
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
