import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Courses, EnrollCoursePayload, Enrollment} from "../../models/course";
import {CourseApiService} from "./course-api.service";
import {Message, MessageService} from "primeng/api";
import {LoaderService} from "../loader-service";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = `course-api`;
  enrolledCourses$: Observable<Enrollment[]>;
  processing$: Observable<boolean>;
  processingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private courseApiService: CourseApiService,
              private loaderService: LoaderService,
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
    this.messageService.clear()
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
    const content = {severity:'success', summary: 'Success', detail: detail};
    this.messageService.add(content);
  }

  showError(detail:string) {
    const content = {severity:'error', summary: 'Error', detail: detail};
    this.messageService.add(content);
  }

  showWarning(detail:string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: detail});
  }
}
