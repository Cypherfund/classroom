import {Component, Input, OnInit} from '@angular/core';
import { Instructor, InstructorDetails } from '../../../../models/course';
import { appConfig } from '../../../../../environments/app.config';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent implements OnInit{
  @Input() instructorDetails!: Instructor;
  imagebucket: string = appConfig.imagebucket;
  constructor() {
  }

  ngOnInit(): void {
  }


}
