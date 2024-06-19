import {Component, Input} from '@angular/core';
import {LessonPart} from "../../../../models/course";
import {CommonModule} from "@angular/common";
import {CustomPipesModule} from "../../../../pipe/custom-pipes.module";

@Component({
  selector: 'app-lesson-part',
  templateUrl: './lesson-part.component.html',
  styleUrl: './lesson-part.component.scss',
  standalone: true,
  imports: [CommonModule, CustomPipesModule]
})
export class LessonPartComponent {
  @Input() lessonParts!: LessonPart[];

  get sortedLessonParts(): LessonPart[] {
    return this.lessonParts?.sort((a, b) => a.position - b.position);
  }

  startQuiz(quizId: any) {
    // console.log('Starting quiz with ID:', quizId);
    // Implement quiz start logic here
  }
}
