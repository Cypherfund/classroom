import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CoursePaymentRequest, PaymentMethod} from "../../../../../models/payment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-orange-money-payment-form',
  templateUrl: './orange-money-payment-form.component.html',
  styleUrl: './orange-money-payment-form.component.scss'
})
export class OrangeMoneyPaymentFormComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Output() processPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentForm!: FormGroup;
  successMsg: string = 'Confirm payment on your phone by dialing *126# and entering your pin.';
  constructor(fb: FormBuilder) {
    this.paymentForm = fb.group({
      phn: ['', [Validators.required, Validators.pattern('^6[0-9]{8}$')]],
      saveInfo: [false]
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const request: Partial<CoursePaymentRequest> = {
        extra: JSON.stringify({...this.paymentForm.value}),
        paymentMethod: "MOBILE_WALLET",
        paymentCode: this.paymentMethod.strPaymentCode
      }
      this.processPayment.emit({request, msg: this.successMsg});
    }
  }
}
