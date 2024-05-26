import { Component } from '@angular/core';
import {CourseService} from "../../services/course-service/course.service";
import {Router} from "@angular/router";
import {appConfig} from "../../../environments/app.config";
import { CourseDetail } from '../../models/course';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  cities: any;
  formGroup: any;
  value: any;
  value2: any;
  courses: CourseDetail[] = []
  items: MenuItem[] = [];
  selectedMenuItem: any;
  Levels:any = []
  Duration:any = []
  Price:any = []
  Time:any = []
  Categories:any = []
  Type:any = []
    filterValues = {
      categories: [
        { "id": 1, "name": "Design" },
        { "id": 2, "name": "Logic" },
        { "id": 3, "name": "Science" }
      ],
      level: [
        { "id": 1, "name": "Beginner" },
        { "id": 2, "name": "Intermediate" },
        { "id": 3, "name": "Hard" }
      ],
      Duration: [
        { "id": 1, "name": "Beginner" },
        { "id": 2, "name": "Intermediate" },
        { "id": 3, "name": "Hard" }
      ],
      Price: [
        { "id": 1, "name": "0-25$" },
        { "id": 2, "name": "100$-100$" },
        { "id": 3, "name": "1000$-5000$" }
      ],
      Time: [
        { "id": 1, "name": "0-30days" },
        { "id": 2, "name": "30-60days" },
        { "id": 3, "name": "> 70days " }
      ],
      Type: [
        { "id": 1, "name": "Beginner" },
        { "id": 2, "name": "Intermediate" },
        { "id": 3, "name": "Hard" }
      ]
  }



  ngOnInit() {
    this.getCourses()
    this.getCategoryItems()
    this.getLevelItems()
    this.getDurationItems()
    this.getPriceItems()
    this.getTypeItems()
    this.getTimeItems()
    this.items = [
      {
        label: 'Categories',
        items: [
          ...this.Categories
         ]
      },
      {
        label: 'Levels',
        items: [...this.Levels]
      },
      {
        label: 'Duration',
        items: [...this.Duration]
      },
      {
        label: 'Price',
        items: [...this.Price]
      },
      {
        label: 'Time',
        items: [...this.Time]
      },
      {
        label: 'Type',
        items: [...this.Type]
      }
      ]

  }

  constructor( private courseService: CourseService) {
  }

  search() {

  }

  getCategoryItems() {
    this.filterValues.categories.map(category => {
       this.Categories.push({ label: category.name });
    });
  }

  getLevelItems() {
     this.filterValues.level.map(level => {
       this.Levels.push({label: level.name})
    });
  }

  getTypeItems() {
    this.filterValues.Type.map(level => {
      this.Type.push({label: level.name})
    });
  }
  getTimeItems() {
    this.filterValues.Time.map(level => {
      this.Time.push({label: level.name})
    });
  }
  getPriceItems() {
    this.filterValues.Price.map(level => {
      this.Price.push({label: level.name})
    });
  }
  getDurationItems() {
    this.filterValues.Duration.map(level => {
      this.Duration.push({label: level.name})
    });
  }

  getCourses(){
    const sub = this.courseService.getCourses().subscribe( res => {
      this.courses = res.data
    })
  }

}
