import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AboutCourseComponent} from "./pages/course-tab-details-page/about-course/about-course.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {PaymentsComponent} from "./pages/payments/payments.component";
import { TransactionComponent } from './components/transaction/transaction.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'about', component:AboutCourseComponent},
  { path: 'shopping_chart', component:ShoppingCartComponent},
  { path:'payment', component:PaymentsComponent},
  { path:'transaction', component: TransactionComponent},
  { path:'about', component:AboutCourseComponent},
  { path: 'settings', component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
