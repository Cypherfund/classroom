import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader-service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-loader-template',
  template: `
    <div class="loader-container" *ngIf='showLoader'>
      <div class="loader-content">
        <img [src]="'assets/images/logo-round.png'" height='200' width='200' alt="Error GIF" class="loader">
        <h2>Please wait...</h2>
      </div>
    </div>
  `,
  imports: [NgIf, AsyncPipe ],
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
export class LoaderTemplateComponent {
  showLoader: boolean = false;
  constructor(public loaderService: LoaderService) {
    this.loaderService.getLoader().subscribe((value) => {
      this.showLoader = value;
    });
  }
}
