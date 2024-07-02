import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CoursePaymentRequest, PaymentMethod} from "../../../../../models/payment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mobile-payment-form',
  templateUrl: './mobile-payment-form.component.html',
  styleUrl: './mobile-payment-form.component.scss'
})
export class MobilePaymentFormComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Output() processPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.paymentForm = fb.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      saveInfo: [false]
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const request: Partial<CoursePaymentRequest> = {
        extra: {...this.paymentForm.value},
        paymentMethod: "CREDIT_CARD",
        paymentCode: this.paymentMethod.strPaymentCode
      }
      console.log(request);
      this.processPayment.emit(request);
    }
  }
}
