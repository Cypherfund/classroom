import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Lesson } from '../../../../models/course';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [
    CardModule,
    NgIf
  ],
  template: `
    <p-card>
      <div class='d-flex justify-content-between'>
        <b>{{ topic?.name }}</b>
        <p *ngIf='!completed; else completed' class='m-0 time'>{{topic?.duration}} remaining</p>
        <ng-template #completed>
          <span class='pi pi-check-circle'></span>
        </ng-template>
      </div>
      <p class='m-0'>{{ topic?.description }}</p>
    </p-card>
  `,
  styles: `
  ::ng-deep {
      .p-card-content {
        padding: unset;
      }

      .p-card {
        margin-top: 1rem;
        cursor: pointer;
      }

      .time {
        font-size: small;
      }
      .pi-check-circle:before {
        color: green;
        font-size: 1.5rem;
      }
  }
  `
})
export class TopicComponent {
  @Input() topic!: Lesson;
  @Input() courseCompleted = true;

  constructor() {
    this.topic = {
      name: 'Working with remotes',
      description: 'you will learn how to create remote repositories on Github and how to clone them to your local machine.',
      duration: '2 hours'
    }
  }
}
