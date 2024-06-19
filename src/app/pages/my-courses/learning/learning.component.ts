import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LessonPart, lessonParts} from "../../../models/course";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss', '../../../../styles/tabs.scss'],
  host: {ngSkipHydration: 'true'}
})
export class LearningComponent implements OnInit, OnDestroy{
  items = [
    {label: 'Content'},
    {label: 'Resources'}
  ];

  lessonParts: LessonPart[] = lessonParts;
  menus: MenuItem[] | undefined;
  home: MenuItem | undefined;

  lessons = ['Course Overview', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam',  'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam'];
  selectedLesson = 'Course Overview';

  sidebarVisible: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.menus = [
      { label: 'My Programs' },
      { label: 'Product Design for Beginners' },
      { label: 'Course Overview' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  selectLesson(lesson: string) {
    this.selectedLesson = lesson;
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }

  ngOnInit(): void {
    this.document.body.classList.add('no-scroll');
  }
}
