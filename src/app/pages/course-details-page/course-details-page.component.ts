import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course-service/course.service";
import {CourseDetail} from "../../models/course";
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.scss'
})
export class CourseDetailsPageComponent implements OnInit{
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  formGroup!: FormGroup;
  course: CourseDetail | any
  activeCourseId: number = 0;
  constructor(private route: Router,
              private courseService: CourseService,
              private activeRoute: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      this.activeCourseId = params['id'];
    });
    this.getCourse()

    this.formGroup = new FormGroup({
      value: new FormControl(4.6),
      rating: new FormControl(4.6)
    });
    this.items = [{ label: 'All Programs' }, { label: 'Design' }, { label: 'Product Design' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  buyNow(){
    this.route.navigate(['/payment'])
  }

  addToCart(){
    this.cartService.addToCart(this.course);
    this.route.navigate(['/shopping_chart']);
  }

  getCourse() {
    this.courseService.getCourse(this.activeCourseId).subscribe((course) => {
      this.course = course; // Assigns the data to this.course
      console.log(course);
    });
    
  }

}
