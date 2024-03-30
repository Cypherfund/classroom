import { Component , OnInit } from '@angular/core';
import { CourseService } from '../../services/course-service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.model.html',
  styleUrl: './course.model.scss'
})
export class CourseModel implements OnInit{
  
  courseobj = 
  {
    "id": null,
    "name": "",
    "description": "",
    "startDate": "",
    "endDate": "",
    "duration": null,
    "instructorId": "",
    "price": null,
    "status": "",
    "instructors": null,
    "category": null,
    "discountedPrice": 0,
    "numberOfRatings": null,
    "updatedOn": null,
    "hasCompletionCertificate": false,
    "hasRealWorldProjects": false,
    "level": null,
    "targeAudience": null,
    "courseContents": null,
    "courseInclude": null
  }

  courseList: any [] = [];
  TrendingCourses: any [] = [];
  UpcomingCourses: any [] = [];
  

  constructor(
    private courseSrv: CourseService
  ){}

  ngOnInit(): void {
    this.getCourses();
  }
       
  getCourses(){
    this.courseSrv.getCourses().subscribe((res:any) => {
      this.courseList = res.data;
    });
  }

  getTrendingCourses(){
    this.TrendingCourses = this.courseSrv.getTrendingCourses();
  }
  getUpcomingCourses(){
    this.TrendingCourses = this.courseSrv.getUpcomingCourses();
  }
}
