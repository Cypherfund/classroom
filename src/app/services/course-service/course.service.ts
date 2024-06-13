import { Injectable } from '@angular/core';
import {map, Observable, tap} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CourseDetail, Courses, EnrollCoursePayload, Enrollment} from "../../models/course";
import {environment} from "../../../environments/environment";
import {CourseTopicsDTO} from "../../models/courseTopics";
import { Apollo, gql } from 'apollo-angular';
import { COURSE_SUMMARY } from './course-data';
import {HttpService} from "../http.service";
import {APIResponse} from "../../models/user";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = `course-api`;

  constructor(private http: HttpService,  private apollo: Apollo, private userService: UserService) { }

  getCourses(): Observable<Courses>{
    return this.http.get<Courses>(
      `${this.privateUrl}/courses?pageNum=0&size=20`
    )
  }
  getCourse(id: number): Observable<CourseDetail>{
    return this.http.get<CourseDetail>(
      `${this.privateUrl}/courses/${id}`
    )
  }

  getCourseGraphqls(id: number): Observable<any>{
    return this.apollo.query({
      query: gql`${COURSE_SUMMARY.replace('__id', id + '')}`,
    });
  }

  enrollCourse(enrollmentRequest: EnrollCoursePayload): Observable<APIResponse<any>>{
    return this.http.post<any>(`${this.privateUrl}/enrollments`,enrollmentRequest);
  }

  enrolledCourses(): Observable<Enrollment[]>{
    return this.http.get<any>(`${this.privateUrl}/enrollments/user/6ecd851f-3b2f-4b7d-b431-10826213b604`)
      .pipe(tap((response) => console.log(response)), map((response: APIResponse<Enrollment[]>) => response.data));
  }

  saveCourseTopic(payload: CourseTopicsDTO, courseId: number, token: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(`${this.privateUrl}/courses/${courseId}/topics`,payload, {
      headers: headers
    })
  }

}
