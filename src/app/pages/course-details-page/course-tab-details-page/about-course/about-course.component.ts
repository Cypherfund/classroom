import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AboutPayload} from "../../../../models/course";

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrl: './about-course.component.scss'
})
export class AboutCourseComponent implements OnInit, OnDestroy{

  keyAspectsOfCourse: any | undefined;
  aboutResponseBody: any | undefined;
  @Input() aboutPayload!: AboutPayload;

  constructor() {
  }

  ngOnInit(){
    this.keyAspectsOfCourse = {
      updatedOn: this.aboutPayload?.updatedOn,
      duration: this.aboutPayload?.duration,
      level: this.aboutPayload?.level
    }

    this.aboutResponseBody = {
      description: this.aboutPayload.description,
      hasCompletionCertificate: this.aboutPayload?.hasCompletionCertificate,
      hasRealWorldProjects: this.aboutPayload?.hasRealWorldProjects
    }
  }

  ngOnDestroy(){

  }
}
