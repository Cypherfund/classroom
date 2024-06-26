import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslationComponent } from './components/translation/translation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { RatingModule } from 'primeng/rating';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselCoursesComponent } from './components/carousel-courses/carousel-courses.component';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { CarouselModule } from 'primeng/carousel';
import {TagModule} from "primeng/tag";
import { TransactionComponent } from './components/transaction/transaction.component';
import { TableModule } from 'primeng/table';
import { SettingsComponent } from './pages/settings/settings.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageService } from 'primeng/api';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipe } from "./pipe/DomSanitiser/safe.pipe";
import { DateFormatPipe } from "./pipe/date-format.pipe";
import {AccordionModule} from "primeng/accordion";
import {ProgressBarModule} from "primeng/progressbar";
import {UserService} from "./services/user/user.service";
import {UserApiService} from "./services/user/user-api.service";
import { CourseAdminRoutingModule } from './pages/course-admin/course-admin-routing.module';
import { CourseHomeCardComponent } from './components/course-home-card/course-home-card.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ComponentModule } from './components/component.module';
import { AvatarModule } from 'primeng/avatar';
import {
  InstructorDetailsComponent
} from "./pages/course-details-page/course-tab-details-page/instructor-details/instructor-details.component";
import {
  CarouselCourseContentComponent
} from "./pages/course-details-page/course-tab-details-page/course-content/carousel-course-content/carousel-course-content.component";
import {
  CourseContentComponent
} from "./pages/course-details-page/course-tab-details-page/course-content/course-content.component";
import {ReviewsComponent} from "./pages/course-details-page/course-tab-details-page/reviews/reviews.component";
import {
  AboutCourseComponent
} from "./pages/course-details-page/course-tab-details-page/about-course/about-course.component";
import {
  CourseTabDetailsPageComponent
} from "./pages/course-details-page/course-tab-details-page/course-tab-details-page.component";
import { HttpService } from './services/http.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GraphQLModule } from './graphql.module';
import { RoundDownPipe } from './pipe/round-down.pipe';
import {MyCoursesModule} from "./pages/my-courses/my-courses.module";
import {CustomPipesModule} from "./pipe/custom-pipes.module";
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderTemplateComponent } from './components/loader-template/loader-template.component';
import { LoaderService } from './services/loader-service';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    HomepageComponent,
    CourseDetailsPageComponent,
    CourseTabDetailsPageComponent,
    AboutCourseComponent,
    CarouselCoursesComponent,
    TransactionComponent,
    SettingsComponent,
    FooterComponent,
    CourseContentComponent,
    ReviewsComponent,
    InstructorDetailsComponent,
    CarouselCourseContentComponent,
    DateFormatPipe,
    RoundDownPipe,
    CourseHomeCardComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DropdownModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    BreadcrumbModule,
    RatingModule,
    TabMenuModule,
    TagModule,
    TabViewModule,
    ToolbarModule,
    CarouselModule,
    AccordionModule,
    SplitButtonModule,
    ProgressBarModule,
    PanelMenuModule,
    SpinnerComponent,
    GraphQLModule,
    CustomPipesModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    TableModule, // Moved TableModule import to the imports array,
    CourseAdminRoutingModule,
    ComponentModule,
    AvatarModule,
    MyCoursesModule,
    ErrorMessageComponent,
    BlockUIModule,
    ProgressSpinnerModule,
    LoaderTemplateComponent

  ],
  providers: [
    provideClientHydration(),
    MessageService,
    UserService,
    UserApiService,
    HttpService,
    LoaderService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
