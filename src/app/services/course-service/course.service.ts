import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Course, CourseDetail, Courses} from "../../models/course";
import {environment} from "../../../environments/environment.development";
import {CourseTopicsDTO} from "../../models/courseTopics";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = environment.CourseUrl

  constructor(private http: HttpClient) { }

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
