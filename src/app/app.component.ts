import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./services/user/user.service";
import {LocalStorageService} from "./services/localstorage/local-storage.service";
import { Location } from '@angular/common';
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechAscend';

  constructor(translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private userService: UserService,
              private cartService: CartService,
              private stoarageService: LocalStorageService) {
    translate.setDefaultLang('en');
    translate.use('en')
  }


  ngOnInit() {
    this.loginUserIfTokenPresent();
    this.loadCartFromLocalStorage();
  }

  private loginUserIfTokenPresent() {
    const urlToken = new URLSearchParams(this.location.path(true)).get('token');
    if (urlToken) {
      this.stoarageService.set("token", urlToken);
    }
    this.userService.recheckToken().subscribe();

  }

  private loadCartFromLocalStorage() {
    const cartItems = this.stoarageService.get('cart');
    if (!!cartItems && cartItems.length > 0) {
      this.cartService.addCourses(JSON.parse(cartItems));
    }
  }
}
