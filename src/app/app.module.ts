import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslationComponent } from './components/translation/translation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {CardModule} from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";
import { CarouselModule } from 'primeng/carousel';
import { MessageService } from 'primeng/api';
import {UserService} from "./services/user/user.service";
import {UserApiService} from "./services/user/user-api.service";
import { CoursesComponent } from './pages/homepage/components/courses/courses.component';
import { ButtonModule } from 'primeng/button';
import { HttpService } from './services/http.service';
import { GraphQLModule } from './graphql.module';
import { RoundDownPipe } from './pipe/round-down.pipe';
import {CustomPipesModule} from "./pipe/custom-pipes.module";
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderTemplateComponent } from './components/loader-template/loader-template.component';
import { LoaderService } from './services/loader-service';
import {TabViewModule} from "primeng/tabview";
import {ComponentModule} from "./components/component.module";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {PanelMenuModule} from "primeng/panelmenu";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {CartService} from "./services/cart.service";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    HomepageComponent,
    RoundDownPipe,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    CarouselModule,
    GraphQLModule,
    CustomPipesModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ErrorMessageComponent,
    ProgressSpinnerModule,
    LoaderTemplateComponent,
    TabViewModule,
    PanelMenuModule

  ],
  providers: [
    provideClientHydration(),
    MessageService,
    UserService,
    UserApiService,
    HttpService,
    LoaderService,
    CartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
