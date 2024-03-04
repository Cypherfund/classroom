import {Component, Inject, PLATFORM_ID, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { MessageService } from 'primeng/api';
import {isPlatformBrowser} from "@angular/common";
import {clearInterval, setInterval} from "timers"; // update this


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  formGroup!: FormGroup;
  value: number = 0;

  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
    });
      // let interval = setInterval(() => {
      //   this.value = this.value + Math.floor(Math.random() * 10) + 1;
      //   if (this.value >= 100) {
      //     this.value = 100;
      //     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
      //     clearInterval(interval);
      //   }
      // }, 2000);
  }

}
