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

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  formGroup!: FormGroup;


  ngOnInit() {

    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
    this.items = [{ label: 'All Programs' }, { label: 'Design' }, { label: 'Product Design' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
