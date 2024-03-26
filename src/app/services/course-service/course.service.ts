import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = 'http://165.227.251.126/course-api'

  constructor(private http: HttpClient) { }

  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(
      `${this.privateUrl}/courses`
    )
  }
}
