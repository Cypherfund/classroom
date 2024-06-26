import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseDetail, Courses, Enrollment } from '../../../models/course';
import { DOCUMENT } from '@angular/common';
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnDestroy, OnInit{
  course: CourseDetail;
  enrollment: Enrollment;

  hasSubcourses = true;
  private currentCourse$: Observable<CourseDetail>;

  constructor(@Inject(DOCUMENT) private document: Document,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    const user$ = this.userService.recheckToken().subscribe();

    const courseId$ = this.activatedRoute.params.pipe(map(params => params['courseId']));

    const courseData$ = user$.pipe(
      switchMap(user =>
        courseId$.pipe(
          switchMap(courseId => this.myCourseApiService.getUserCourseProgress(user.userId, courseId))
        )
      )
    );
    this.currentCourse$ = this.activatedRoute.params.pipe(
      switchMap(params => {
        const userId = params['userId']; // Adjust these according to your route config
        const courseId = params['courseId'];
        return this.myCourseApiService.getUserCourseProgress(userId, courseId);
      })
    );
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }

  ngOnInit(): void {
    this.document.body.classList.add('no-scroll');
  }



}
