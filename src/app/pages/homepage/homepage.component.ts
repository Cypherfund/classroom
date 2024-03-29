import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  valueRating4= 4;
  courseImage = appConfig.courseImage
  value: any;
  value2: any;
  studentName: string = 'Name';


}
