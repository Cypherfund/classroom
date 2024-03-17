import { Component} from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {MenuItem, SelectItem} from "primeng/api";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 profileImage = appConfig.profileImage

  ngOnInit() {

  }
  searchNav(){
    console.log('found course')
  }

}
