import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment';
import {map, Observable, Subscription} from 'rxjs';
import {MegaMenuItem} from "primeng/api";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogged: boolean = false;
  subscriptions: Subscription[] = [];
  items: MegaMenuItem[] | undefined;

  profileImage = appConfig.profileImage

  totalCoursesSelected$: Observable<string> = this.cartService.coursesSelected$.pipe(map( courses => courses.length + ''));

  constructor(private userService: UserService,
              private cartService: CartService) {
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

    this.initItems();
  }

  navigateToAuth() {
    this.userService.navigateToAuth();
  }

  initItems() {
    this.items = [
      {
        label: 'Explore',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Living Room',
              items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
            }
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }]
            }
          ],
          [
            {
              label: 'Bedroom',
              items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
            }
          ],
          [
            {
              label: 'Office',
              items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
            }
          ]
        ]
      }
    ];
  }
}
