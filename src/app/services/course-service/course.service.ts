import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, shareReplay, tap} from 'rxjs';
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {CourseDetail, Courses, EnrollCoursePayload, Enrollment} from "../../models/course";
import {CourseTopicsDTO} from "../../models/courseTopics";
import { Apollo, gql } from 'apollo-angular';
import { COURSE_SUMMARY } from './course-data';
import {HttpService} from "../http.service";
import {APIResponse} from "../../models/user";
import {UserService} from "../user/user.service";
import {CourseApiService} from "./course-api.service";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = `course-api`;
  enrolledCourses$: Observable<Enrollment[]>;
  processing$: Observable<boolean>;
  processingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private courseApiService: CourseApiService,
              private messageService: MessageService) {
    this.enrolledCourses$ = this.enrolledCourses();
    this.processing$ = this.processingSubject$.asObservable();
  }

  getCourses(categoryName: string = ''): Observable<Courses>{
    return this.courseApiService.getCourses(categoryName);
  }

  getCourseGraphqls(id: number): Observable<any>{
    return this.courseApiService.getCourseGraphqls(id);
  }

  enrollCourse(enrollmentRequest: EnrollCoursePayload, successMsg: string): void{
    this.processingSubject$.next(true);
    this.courseApiService.enrollCourse(enrollmentRequest).subscribe(
      {
        next: value => {
          if (value.success) {
            this.showSuccess(successMsg);
          } else {
            this.showError(value.message)
          }
        },
        error: err => this.showError('An error occured try again later'),
        complete: () => this.processingSubject$.next(false)
      }
    );
  }

  enrolledCourses(): Observable<Enrollment[]>{
    return this.courseApiService.enrolledCourses();
  }

  showSuccess(detail:string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail:string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

  showWarning(detail:string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: detail});
  }
}
