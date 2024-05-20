import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogged: boolean = false;
  subscriptions: Subscription[] = [];

  profileImage = appConfig.profileImage

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.isLogged = !!Object.keys(this.userService.user).length;
    this.subscriptions.push(
      this.userService.login$.pipe().subscribe( loginVal => {
        if (loginVal === 1) {
          this.isLogged = !!Object.keys(this.userService.user).length;
        }
    })
    );

  }
  searchNav(){
    console.log('found course')
  }

  navigateToAuth() {
    window.location.href = environment.authUrl;
  }
}
