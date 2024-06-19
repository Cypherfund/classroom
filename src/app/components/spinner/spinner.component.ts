import {Component, Input, SimpleChanges} from '@angular/core';
import {BlockUIModule} from "primeng/blockui";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  imports: [
    BlockUIModule
  ],
  standalone: true
})
export class SpinnerComponent {
  @Input()
  message = 'loading courses';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }
}
