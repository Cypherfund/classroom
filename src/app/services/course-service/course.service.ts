import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(
      `${this.privateUrl}/courses`
    )
  }
}
