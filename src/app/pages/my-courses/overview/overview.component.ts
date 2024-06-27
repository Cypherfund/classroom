import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseDetail, Courses, Enrollment } from '../../../models/course';
import { DOCUMENT } from '@angular/common';
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {MyCourseService} from "../services/my-course-service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnDestroy, OnInit{
  enrollment!: Enrollment;

   currentCourse$: Observable<CourseDetail> = this.mycourseService.currentCourse$;

  constructor(@Inject(DOCUMENT) private document: Document,
              private userService: UserService,
              private mycourseService: MyCourseService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }

  ngOnInit(): void {
    this.currentCourse$.subscribe();
    this.document.body.classList.add('no-scroll');
    this.activatedRoute.params
      .pipe(map(params => params['courseId']))
      .subscribe(value => this.mycourseService.loadMyCourse(value));
  }



}
