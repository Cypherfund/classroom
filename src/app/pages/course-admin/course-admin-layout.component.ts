import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-course-admin-layout',
  templateUrl: './course-admin-layout.component.html',
  styleUrl: './course-admin-layout.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class CourseAdminLayoutComponent implements OnInit, OnDestroy{
  constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }

  ngOnInit(): void {
    this.document.body.classList.add('no-scroll');
  }
}
