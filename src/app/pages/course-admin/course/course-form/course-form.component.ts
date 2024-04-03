import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      startDate: [''],
      endDate: [''],
      duration: [''],
      instructorId: [''],
      price: ['', Validators.required],
      status: ['DRAFT', Validators.required]
    });

  }

  onSubmit() {
    // Handle form submission logic (e.g., send data to backend)
    console.log(this.courseForm.value);
  }
}
