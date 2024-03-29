import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Course} from "../../models/course";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = environment.CourseUrl

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(
      `${this.privateUrl}/courses?pageNum=0&size=20`
    )
  }
  getCourse(id: number): Observable<Course>{
    return this.http.get<Course>(
      `${this.privateUrl}/courses/${id}`
    )
  }
}
