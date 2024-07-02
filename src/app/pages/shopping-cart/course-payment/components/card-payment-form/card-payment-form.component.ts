import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursePaymentRequest, PaymentMethod} from "../../../../../models/payment";

@Component({
  selector: 'app-card-payment-form',
  templateUrl: './card-payment-form.component.html',
  styleUrl: './card-payment-form.component.scss'
})
export class CardPaymentFormComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Output() processPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.paymentForm = fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^6[0-9]{8}$')]]
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const request: Partial<CoursePaymentRequest> = {
        extra: {...this.paymentForm.value},
        paymentMethod: "MOBILE_WALLET",
        paymentCode: this.paymentMethod.strPaymentCode
      }
      console.log(request);
      this.processPayment.emit(request);
    }
  }
}
