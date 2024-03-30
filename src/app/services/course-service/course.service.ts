import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private list: any[] = [];
  constructor(private http: HttpClient) { 
  }

  getCourses(): Observable<any> {
    const url = "https://tech-ascend.com/course-api/courses?pageNum=0&size=20";
    return this.http.get(url);
  }

  getTrendingCourses(): any[]{
    const trendList: any[] = [];
    this.getCourses().subscribe((res:any) => {
      this.list = res.data;
      this.list.forEach(element => {
        if (element.numberOfRatings===null) {
          trendList.push(element);
        }
      });
    });
    return trendList;
  }

  getUpcomingCourses(): any[]{
    const date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US')+"";
    const upcomingList: any[] = [];
    this.getCourses().subscribe((res:any) => {
      this.list = res.data;
      this.list.forEach(element => {
        if (element.startDate > date1) {
          upcomingList.push(element);
        }
      });
    });
    return upcomingList;
  }
}
