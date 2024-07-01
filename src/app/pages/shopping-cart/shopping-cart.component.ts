import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  profileImage = appConfig.profileImage
  selectedCourses$ = this.cartService.coursesSelected$;

  constructor(private cartService: CartService) {

  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
