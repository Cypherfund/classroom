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
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { RatingModule } from 'primeng/rating';
import { CourseTabDetailsPageComponent } from './pages/course-tab-details-page/course-tab-details-page.component';
import { AboutCourseComponent } from './pages/course-tab-details-page/about-course/about-course.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselCoursesComponent } from './components/carousel-courses/carousel-courses.component';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { CarouselModule } from 'primeng/carousel';
import {TagModule} from "primeng/tag";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    NavbarComponent,
    HomepageComponent,
    CourseDetailsPageComponent,
    CourseTabDetailsPageComponent,
    AboutCourseComponent,
    CarouselCoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DropdownModule,
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
    CardModule,
    CarouselModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
