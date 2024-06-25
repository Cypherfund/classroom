import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AboutPayload} from "../../../../models/course";

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrl: './about-course.component.scss'
})
export class AboutCourseComponent implements OnInit, OnDestroy{

  @Input() aboutPayload!: AboutPayload;

  constructor() {
  }

  ngOnInit(){
  }

  ngOnDestroy(){

  }
}
