import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) { }

  Page(page: string) {
    this.router.navigateByUrl(page);
  }
}
