import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CourseApiService } from '../services/course-api.service';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { CourseDetail } from '../../../../models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.scss',
  providers: [CourseService, CourseApiService]
})
export class CourseCreateComponent {
  courseResult$: Observable<CourseDetail | null> = this.courseService.courseResult$;
  loading$: Observable<boolean> = this.courseService.loading$;
  constructor(private activeRoute: ActivatedRoute,

              private courseService: CourseService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'new') this.courseService.getCourse(params['id']);
    });
  }

  createOrUpdateCourse(course: CourseDetail) {
    this.courseService.updateCourse(course);
  }

}
