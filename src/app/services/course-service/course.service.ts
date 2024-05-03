import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Course, CourseDetail, Courses} from "../../models/course";
import {environment} from "../../../environments/environment.development";

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
}
