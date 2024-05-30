import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseDetail } from '../../../../models/course';
import { CourseService } from '../services/course.service';
import { CourseApiService } from '../services/course-api.service';
import { MessageService } from 'primeng/api';
import { APIResponse } from '../../../../models/user';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  providers: [CourseService, CourseApiService]
})
export class CourseListComponent implements OnInit{
  selectedCourse!: any;
  courses$: Observable<APIResponse<CourseDetail[]> | null> = this.courseService.courses$;
  loading$: Observable<boolean> = this.courseService.loading$;
  constructor(private router: Router,
              private courseService: CourseService,
              private messageService: MessageService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  addNewCourse() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
