import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-error-message',
  template: `
    <div class="error-container">
      <div class="error-content">
        <h1>Oops!</h1>
        <h2>Something Went Wrong</h2>
        <p>We are sorry for the inconvenience. Please try again later or contact our support team.</p>
        <button (click)="retry()">Retry</button>
      </div>
    </div>
  `,
  styles: `
       .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
        background-color: #f0f2f5;
      }

      .error-content {
        text-align: center;
        background-color: #fff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .error-content h1 {
        font-size: 4rem;
        color: var(--main-color-shade-1);
        margin-bottom: 1rem;
      }

      .error-content h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
      }

      .error-content p {
        font-size: 1rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .error-content button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        margin: 0.5rem;
        font-size: 1rem;
        border-radius: 5px;
        background-color: var(--main-color-shade-1);
        color: #fff;
        border: none;
        cursor: pointer;
      }

      .error-content button:hover {
        opacity: 0.9;
      }

  `
})
export class ErrorMessageComponent {
  @Output() retryEvent: EventEmitter<boolean> = new EventEmitter();
  retry() {
    this.retryEvent.emit(true);
  }
}
