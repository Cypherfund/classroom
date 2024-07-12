import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "../../services/localstorage/local-storage.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'file-upload',
  standalone: true,
  imports: [ CommonModule, FileUploadModule, ToastModule, BadgeModule ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent {

  @ViewChild('fileInput') fileInputEl!: ElementRef;
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploading!: boolean;
  uploadProgress!: number;
  private intervalId: any;
  selectedFileURL: string | null = null;
  @Input() folder: string = 'courses';
  @Input() uploadUrl: string | null = null;
  @Output() fileUploaded: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private messageService: MessageService,
    private readonly storageService: LocalStorageService,
    private readonly userService: UserService,
    private config: PrimeNGConfig) {
  }
  async onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.selectedFileURL = URL.createObjectURL(this.selectedFile);
      await this.uploadtoDigitalOcean();
    }
  }


  async uploadtoDigitalOcean() {
    if (this.selectedFile) {
      try {
        this.uploading = true;
        this.startProgressInterval();

        const data = await this.storageService.uploadFile(this.selectedFile, this.folder);
        this.setProgressTo100();
        this.uploadSuccess = true;
        this.uploadUrl = `https://${environment.memrai_bucket}.nyc3.digitaloceanspaces.com/${this.folder}/${this.selectedFile.name}`;
      } catch (error) {
        this.uploadSuccess = false;
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
      } finally {
        this.uploading = false;
        this.stopProgressInterval();
        if (this.uploadSuccess && this.uploadUrl) {
          this.fileUploaded.emit(this.uploadUrl);
        }
      }
    }
  }

  startProgressInterval() {
    this.uploadProgress = 10;
    this.intervalId = setInterval(() => {
      if (this.uploadProgress < 99) {
        this.uploadProgress += 1;
      }
    }, 100);
  }

  setProgressTo100() {
    clearInterval(this.intervalId);
    this.uploadProgress = 100;
  }

  stopProgressInterval() {
    clearInterval(this.intervalId);
  }

  removeFile() {
    this.selectedFile = null;
    this.fileInputEl.nativeElement.value = '';
  }

  isImageFile(file: File | null): boolean {
    return file ? file.type.startsWith('image/') : false;
  }

  isVideoFile(file: File | null): boolean {
    return file ? file.type.startsWith('video/') : false;
  }
}
