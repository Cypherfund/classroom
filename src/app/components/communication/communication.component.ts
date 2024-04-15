import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent {
preferences ={
  email: false,
  sms:false
}
  savePreferences(){
    // if (this.preferencesForm.valid) {
    //   // Form is valid, proceed with saving preferences
    // } else {
    //   // Form is invalid, handle validation errors
    // }
  }
}
