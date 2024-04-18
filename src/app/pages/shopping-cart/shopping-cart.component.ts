import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { CartService } from '../../services/cart-service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  profileImage = appConfig.profileImage

  cartCourses: any[] = [];
  TotalPayment = 50;
  discountCoupon: any;

  constructor(private cartService: CartService,
              private route: Router,
              ) {
    this.cartCourses = this.cartService.getCartCourses();
    this.getTotal();
  }

  getTotal(){
    this.TotalPayment = this.cartService.getTotal();
  }

  checkout() {
    this.route.navigate(['/payment']);
  }

  Remove(index: number) {
    this.cartService.removeFromCart(index);
    this.cartCourses = this.cartService.getCartCourses()
    this.getTotal();
  }
}
