import {Component, Input, OnInit} from '@angular/core';
import {appConfig} from "../../../../environments/app.config";
import {InstructorDetails} from "../../../models/course";

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent implements OnInit{
  @Input() instructorDetails!: InstructorDetails;

  constructor() {
  }

  ngOnInit(): void {
  }


}
