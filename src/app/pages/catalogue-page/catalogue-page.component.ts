import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CourseService } from '../../services/course-service/course.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrl: './catalogue-page.component.scss'
})
export class CataloguePageComponent implements OnInit{

  nav = [
    {
      name:"Categories"
    },
    {
      name:"Level"
    },
    {
      name:"Price"
    },
    {
      name:"Type"
    },
    {
      name:"Duration"
    }
  ]

  filter = [ 
    { name: "Sort by most popular" }, 
    { name: "ReactJS" }, 
    { name: "Angular" }, 
    { name: "Bootstrap" }, 
    { name: "PrimeNG" }, 
  ]; 

  items: MenuItem[]|undefined;
  courses: any[] = [];
  value: any;

  constructor( private courseService: CourseService){}
  ngOnInit() {
    this.value = 3;
    this.courseService.getCourses().subscribe((res:any) => {
      this.courses = res.data;
    }); 
    this.items = [ 
      { 
        label: "JavaScript", 
        items: [ 
          { 
            label: "JavaScript1", 
            items: [ 
              { 
                label: "JavaScript1.1", 
              }, 
              { 
                label: "JavaScript1.2", 
              }, 
            ], 
          }, 
          { 
            label: "JavaScript2", 
          }, 
          { 
            label: "JavaScript3", 
          }, 
        ], 
      }, 
      { 
        label: "HTML", 
        items: [ 
          { 
            label: "HTML 1", 
          }, 
          { 
            label: "HTML 2", 
          }, 
        ], 
      }, 
      { 
        label: "Angular", 
  
        items: [ 
          { 
            label: "Angular 1", 
          }, 
          { 
            label: "Angular 2", 
          }, 
        ], 
      }, 
    ]; 
  } 

}
