import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-see-more-text',
  template: `
    <div class="see-more" [class.collapsed]="isCollapsed">
      <ng-container *ngIf="isCollapsed; else fullText">{{ text | slice:0:maxCharacters }}</ng-container>
      <ng-template #fullText>{{ text }}</ng-template>
      <a href="#" (click)="toggleCollapsed($event)" *ngIf="text.length > maxCharacters">{{ isCollapsed ? 'See more' : 'See less' }}</a>
    </div>
  `,
  styleUrls: ['see-more-text.component.scss']
})
export class SeeMoreTextComponent {
  @Input() text: string = '';
  maxCharacters: number = 10; // Adjust as needed
  isCollapsed: boolean = true;

  toggleCollapsed(event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.isCollapsed = !this.isCollapsed;
  }
}
