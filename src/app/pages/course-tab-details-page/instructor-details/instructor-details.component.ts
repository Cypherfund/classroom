import { Component } from '@angular/core';
import {appConfig} from "../../../../environments/app.config";

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent {
  profileImage = appConfig.profileImage
}
