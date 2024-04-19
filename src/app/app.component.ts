import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./services/user/user.service";
import {UserApiService} from "./services/user/user-api.service";
import {LocalStorageService} from "./services/localstorage/local-storage.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cypherfund';

  constructor(translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private userApiService: UserApiService,
              private stoarageService: LocalStorageService,
              private userService: UserService) {
    translate.setDefaultLang('en');
    translate.use('en')
  }


  ngOnInit() {
    this.loginUserIfTokenPresent();
  }

  private loginUserIfTokenPresent() {
    const token = new URLSearchParams(this.location.path(true)).get('token');
    if (!!token) {
      this.userApiService.verifyToken(token).subscribe((response) => {
        if (response.success) {
          this.stoarageService.set('token', token); //todo add security
          this.userService.setUser(response.data);
          this.router.navigate(['/']);
        }
      })
    }
  }
}
