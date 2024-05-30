import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, distinctUntilChanged, filter, map, merge, Observable, of, share, switchMap, tap } from 'rxjs';
import { APIResponse } from '../../../../models/user';
import { CourseDetail, Courses } from '../../../../models/course';
import { CourseApiService } from './course-api.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class CourseService {

  loading$: Observable<boolean>;
  private loadingTrigger$ = new BehaviorSubject<boolean>(true);
  courses$: Observable<APIResponse<CourseDetail[]> | null>;
  private refreshTrigger$ = new BehaviorSubject<boolean>(false);
  courseResult$: Observable<CourseDetail | null>;
  private loadCourseDetailTrigger$ = new BehaviorSubject<string>('');
  private updateCourseDetail$ = new BehaviorSubject<CourseDetail | null>(null);

  constructor(private readonly courseApi: CourseApiService,
              private readonly messsageService: MessageService) {
    this.loading$ = this.loadingTrigger$.asObservable().pipe(distinctUntilChanged<boolean>());

    this.courses$ = this.refreshTrigger$.pipe(
      switchMap(() => this.fetchCourses())
    ).pipe(
        filter(course => course !== null && course !== undefined),
        share()
      );

    this.courseResult$ = merge(
      this.loadCourseDetailTrigger$.pipe(
        filter(courseId => !!courseId),
        switchMap( courseId => {
          this.loadingTrigger$.next(true);
          return this.courseApi.getCourseById(courseId).pipe(
            map(result => result?.data),
            tap(() => {
              this.loadingTrigger$.next(false);
            }),
            catchError(() => {
              this.loadingTrigger$.next(false);
              return of(null);
            })
          );
        } )
      ),
      this.updateCourseDetail$.pipe(
        filter(course => !!course),
        switchMap( course => {
          this.loadingTrigger$.next(true);
          let observable: Observable<APIResponse<CourseDetail>>;
          if (!!course?.id) {
            observable = this.courseApi.updateCourse(course.id, course);
          } else {
            observable = this.courseApi.createCourse(course!);
          }
          return observable.pipe(
            map(data => data?.data),
            tap(() => {
              this.loadingTrigger$.next(false);
              this.showSuccess("saved successfully");
            }),
            catchError((errorResponse) => {
              this.loadingTrigger$.next(false);
              return of(null);
            })
          );
        } )
      )
        .pipe(filter(course => course !== null && course !== undefined),
          share()
        )
    );
  }

  public fetchCourses() {
    this.loadingTrigger$.next(true);
    return this.courseApi.getCourses()
      .pipe(
        tap(() => this.loadingTrigger$.next(false)),
        catchError(err => {
          this.loadingTrigger$.next(false);
          return of(null)
        })
      );
  }

  public getCourse(id:number) {
    this.loadCourseDetailTrigger$.next(id+'');
  }

  public  updateCourse (course: CourseDetail) {
    this.updateCourseDetail$.next(course);
  }
  public refreshCourses() {
    this.refreshTrigger$.next(true);
  }

  showSuccess(detail:string) {
    this.messsageService.add({severity:'success', summary: 'Success', detail: detail});
  }}
