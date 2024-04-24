import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from "@angular/forms";
import { Router } from '@angular/router'; // Import Router
import { AccountService } from '../../services/account-service/account.service';

@Component({
  selector: 'app-amount',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
    accountForm: FormGroup;
    showError: boolean = false;
    userData : any = {};
    constructor(
      private fb: FormBuilder,
      private router :Router,
      private accountService: AccountService
     ) {
      this.showError = false;
      const pattern= /^(?=[^A-Z]*[A-Z])(?=[a-z]*[a-z])(?=\D*\d).{8,}$/;
      this.accountForm =  this.fb.group({
        fullName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
        email: ['', [Validators.required, Validators.email]],
        timeZone:['', Validators.required],
        language: ['', Validators.required],
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.pattern(pattern)]],
        retryPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      },{
        validators: this.passwordsMatchValidator
      })
     } 
ngOnInit(): void {
  this.accountService.getUserData().subscribe((data) =>{
    this.userData = data
  },
  (error) =>{
   console.error('Error fetching user data:', error);
   
  }
)
}

passwordsMatchValidator(control: FormGroup): ValidationErrors | null {
  const newPassword = control.get('newPassword');
  const retryPassword = control.get('retryPassword');

  if(newPassword && retryPassword && newPassword.value !== retryPassword.value){
return {passwordsNotMatch: true}
  }
  return null;
}

matchPassword(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.get("newPassword");
  const retryPassword = control.get("retryPassword");
  if(newPassword && retryPassword && newPassword.value !== retryPassword && retryPassword.value !== ''){
    return {passwordMismatch: true}
  }
  return null
}

   get fullName () {
    return this.accountForm.controls['fullName']
  }
  get email () {
    return this.accountForm.controls['email']
  }
  get timeZone () {
    return this.accountForm.controls['timeZone']
  }
  get language () {
    return this.accountForm.controls['language']
  }
  get currentPassword () {
    return this.accountForm.controls['currentPassword']
  }
  get newPassword () {
    return this.accountForm.controls['newPassword']
  }
  get retryPassword () {
    return this.accountForm.controls['retryPassword']
  }

onSave(): void {
  if(this.accountForm.valid && this.accountForm.touched){
     // Form is valid, proceed with saving data
     console.log('Form is invalid');
    this.showError = true;
    Object.keys(this.accountForm.controls).forEach(key => {
      const control = this.accountForm.get(key)
      if(control){
        control.markAsTouched()
      };
    });
  }
  //Form is invalid, display error messages
  else{
    console.log('Form data:', this.accountForm.value);
    this.showError = false;
  }
  this.userData = {
    fullName: 'Douanla Tiwa Valdese',
    email: 'tiwaval7@gmail.com',
    timeZone: 'West Africa Time (WAT) GMT + 1',
    language: 'English'
  }
  this.saveUserData(this.userData)
}
saveUserData(data:any): void{
console.log('Saving user data', data);

}
onVerifyName(): void{
console.log('Verifying Name...');

}
onChangePassword(): void{
  if(!this.accountForm.valid || !this.accountForm.touched ){
    console.log('Changing Password...');
    this.showError = true;
    Object.keys(this.accountForm.controls).forEach(key => {
      const control = this.accountForm.get(key)
      if(control){
        control.markAsTouched()
      };
    });
  }
  else{
    console.log('Form data:', this.accountForm.value);
    this.showError = false;
  }
}
enableTwoFactorAuthentication(): void{
console.log('Two factor authentication enabled');

}
}
