import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  profileImage = appConfig.profileImage

  constructor() {

  }
}
