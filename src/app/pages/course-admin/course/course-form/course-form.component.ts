import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CourseService} from "../../../../services/course-service/course.service";
import {CourseTopicsDTO} from "../../../../models/courseTopics";
import {HttpErrorResponse} from "@angular/common/http";
import {LocalStorageService} from "../../../../services/localstorage/local-storage.service";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  visible: boolean = false;
  courseTopicForm!: FormGroup;
  courseLessonForm!: FormGroup;
  loader: boolean = false;
  token : string = '';

  constructor(private fb: FormBuilder, private courseService: CourseService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      status: ['DRAFT', Validators.required],
      instructors: this.fb.group({
        // instructorId: [''],
        instructorName: ['', Validators.required],
        profession: ['', Validators.required],
        // instructorRating: ['', Validators.required],
        // numberOfCourses: [0,  Validators.required],
        // numberOfStudents: [0, Validators.required],
        yearsOfExperience: [0, Validators.required],
        description: ['', Validators.required],
        profilePicture: ['', Validators.required]
      }),
      category: ['', Validators.required],
      discountedPrice: [0, Validators.required],
      // numberOfRatings: 0,
      // updatedOn: [Date.now(), Validators.required],
      hasCompletionCertificate: [null, Validators.required],
      hasRealWorldProjects: [null, Validators.required],
      level: ['', Validators.required],
    });

    this.courseTopicForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic (e.g., send data to backend)
    console.log(this.courseForm.value);
  }

  saveCourseTopics(){
    this.loader = true
    const payload: CourseTopicsDTO = {
      courseId: 1,
      duration: this.courseTopicForm.value.duration,
      name: this.courseTopicForm.value.name,
      position: this.courseTopicForm.value.position
    }
    this.token = this.localStorageService.getToken('data').token
    console.log(payload)
    const sub = this.courseService.saveCourseTopic(payload, payload.courseId, this.token).subscribe(
      res => {
        console.log(res)
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
      ).add(() => {
        (this.loader = false)
      });
  }
}
