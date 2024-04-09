import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CourseService} from "../../../../services/course-service/course.service";
import {CourseTopicsDTO} from "../../../../models/courseTopics";
import {HttpErrorResponse} from "@angular/common/http";
import {LocalStorageService} from "../../../../services/localstorage/local-storage.service";
import {CourseDTO} from "../../../../models/CourseDTO";

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
  contentForm!: FormGroup;
  showInputField = false;



  constructor(private fb: FormBuilder, private courseService: CourseService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      status: ['DRAFT', Validators.required],
      instructors: this.fb.group({
        instructorName: ['', Validators.required],
        profession: ['', Validators.required],
        yearsOfExperience: ['', [Validators.required, Validators.min(1)]],
        description: ['', Validators.required],
        profilePicture: ['', Validators.required]
      }),
      category: ['', Validators.required],
      discountedPrice: ['', [Validators.required, Validators.min(1)]],
      hasCompletionCertificate: [false, Validators.required],
      hasRealWorldProjects: [false, Validators.required],
      level: ['', Validators.required],
    });
    this.courseTopicForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      duration: ['', Validators.required]
    });
    this.courseLessonForm = this.fb.group({
      lessonName: ['', Validators.required],
      title: ['', Validators.required],
      contentType: ['LECTURE', Validators.required],
      position: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  get file() {
    return this.courseForm.get('profilePicture');
  }


  onSubmit() {
    // Handle form submission logic (e.g., send data to backend)
    console.log(this.courseForm.value);
    const payload : CourseDTO = {
      category: this.courseForm.value.category,
      courseContents: [{numberOfLectures: "", numberOfSections: "", totalCourseDuration: ""}],
      courseInclude: [""],
      description: this.courseForm.value.description,
      discountedPrice: this.courseForm.value.discountedPrice,
      duration: this.courseForm.value.duration,
      endDate: this.courseForm.value.endDate,
      hasCompletionCertificate: true,
      hasRealWorldProjects: true,
      id: 0,
      instructorId: "1",
      instructors: {
        description: this.courseForm.value.instructors.description,
        instructorId: "1",
        instructorName: this.courseForm.value.instructors?.instructorName,
        instructorRating: "4",
        numberOfCourses: 10,
        numberOfStudents: 500,
        profession: this.courseForm.value.instructors?.profession,
        profilePicture: this.courseForm.value.instructors?.profilePicture,
        yearsOfExperience: this.courseForm.value.instructors?.yearsOfExperience
      },
      level: this.courseForm.value.level,
      name: this.courseForm.value.name,
      numberOfRatings: 2000,
      price: this.courseForm.value.price,
      startDate: this.courseForm.value.startDate,
      status: this.courseForm.value.status,
      targeAudience: [""],
      updatedOn: Date.now().toLocaleString()
    }
    console.log(payload)
  }

  getSelected(){

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

  saveCourseLesson() {

  }
  onSelectContentType() {
    const selectedIndex =
      this.courseLessonForm.value.contentType
      console.log(selectedIndex)
    // this.showInputField = selectedIndex === 1;
    // Show input field when 'option2' is selected
  }
}
