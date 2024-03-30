import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import { Router } from '@angular/router';
import { CourseModel } from '../../components/course/course.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Page(page: string) {
    this.router.navigateByUrl(page);
  }
}
