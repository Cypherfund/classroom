import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import { Router } from '@angular/router';
import { CourseService } from '../../services/course-service/course.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit{

  trendingCourses: any [] = [];
  constructor(
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.trendingCourses = this.courseService.getTrendingCourses();
  }

  Page(page: string) {
    this.router.navigateByUrl(page);
  }
}
