import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {LessonPart, lessonParts} from "../../../models/course";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss', '../../../../styles/tabs.scss']
})
export class LearningComponent {
  items = [
    {label: 'Content'},
    {label: 'Resources'}
  ];

  lessonParts: LessonPart[] = lessonParts;
  menus: MenuItem[] | undefined;
  home: MenuItem | undefined;

  lessons = ['Course Overview', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam',  'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Exam'];
  selectedLesson = 'Course Overview';


  constructor() {
    this.menus = [
      { label: 'My Programs' },
      { label: 'Product Design for Beginners' },
      { label: 'Course Overview' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  onTabChange(event: any) {
    // Handle tab change
  }

  selectLesson(lesson: string) {
    this.selectedLesson = lesson;
  }
}
