import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.scss'
})
export class CourseDetailsPageComponent {
  videoPath: string = 'assets/preview.mp4';
  courseTitle: string = 'Product Design for Beginners'
  numOFStudents: string = '7000'
  numberOFRatings: string = '5,000'
  instructorName: string = 'Jerry Peters'
  price: string = '$50'

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  formGroup!: FormGroup;
  courseHighlight:  string = 'Dive into the world of product design where creativity meets functionality. Discover how to craft products that captivate and enhance everyday life';


  ngOnInit() {

    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
    this.items = [{ label: 'All Programs' }, { label: 'Design' }, { label: 'Product Design' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
