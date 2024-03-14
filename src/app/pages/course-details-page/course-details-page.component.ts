import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {CourseService} from "../../services/course-service/course.service";
import {Course} from "../../models/course";

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.scss'
})
export class CourseDetailsPageComponent implements OnInit{
  courseTitle: string = ''
  numOFStudents: string = '7000'
  numberOFRatings: string = '5,000'
  instructorName: string = 'Jerry Peters'
  price: string = '$50'

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  formGroup!: FormGroup;
  courseHighlight:  string = 'Dive into the world of product design where creativity meets functionality. Discover how to craft products that captivate and enhance everyday life';
  course: Course | any
  constructor(private route: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    this.getCourse()

    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
    this.items = [{ label: 'All Programs' }, { label: 'Design' }, { label: 'Product Design' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  buyNow(){
    this.route.navigate(['/payment'])
  }

  addToCart(){
    this.route.navigate(['/shopping_chart'])
  }

  getCourse() {

    this.courseService.getCourse().subscribe((course) => {
      this.course = course[0]; // Assigns the data to this.course
      this.courseTitle = this.course.title
      this.instructorName = this.course.instructor
      this.courseHighlight = this.course.description
      this.price = "$"+this.course.price
    });
  }

}
