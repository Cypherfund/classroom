import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { Observable } from 'rxjs';
import { CourseDetail } from '../../../../models/course';
import { APIResponse } from '../../../../models/user';

@Injectable()
export class CourseApiService {

  basePath = `course-api`;

  constructor(private http: HttpService) {
  }

  getCourses(): Observable<APIResponse<CourseDetail[]>> {
    return this.http.get(`${ this.basePath }/courses`);
  }

  getCourseById(id: string): Observable<CourseDetail> {
    return this.http.get(`${ this.basePath }/courses/${id}`)
  }
  createCourse(courseDetail: CourseDetail): Observable<APIResponse<CourseDetail>> {
    return this.http.post(`${ this.basePath }/courses`, courseDetail);
  }

  updateCourse(id: number, courseDetail: CourseDetail): Observable<APIResponse<CourseDetail>> {
    return this.http.put(`${ this.basePath }/courses/${ id }`, courseDetail);
  }

}
