import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loader-template',
  template: `
    <div class="loader-container">
      <div class="loader-content">
        <img [src]="'assets/images/logo-round.png'" height='200' width='200' alt="Error GIF" class="loader">
        <h2>Please wait...</h2>
      </div>
    </div>
  `,
  imports: [],
  styles: `
      .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
        background-color: #f0f2f5;
      }
      .loader-content {
      text-align: center;
      padding: 2rem;
    }

    .loader {
      border: 8px solid #f3f3f3;
      border-top: 8px solid var(--main-color-shade-1);
      border-radius: 50%;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  `
})
export class LoaderTemplateComponent {}
