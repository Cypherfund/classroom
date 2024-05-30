import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LocalStorageService} from "../../../../services/localstorage/local-storage.service";
import { MessageService } from 'primeng/api';
import { Category } from '../../../../models/category';
import { CourseApiService } from '../services/course-api.service';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { CourseDetail } from '../../../../models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
  providers: [CourseService, CourseApiService]
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

  courseResult$: Observable<CourseDetail | null> = this.courseService.courseResult$;
  loading$: Observable<boolean> = this.courseService.loading$;
  categories: Category[] = [
    {id: 1, name: 'technology', description: ''}
  ]
  constructor(private fb: FormBuilder,
              private courseService: CourseService,
              private messageService: MessageService,
              private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.showSuccess();
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      status: ['DRAFT', Validators.required],
      category: [{'id': 1}, Validators.required],
      discountedPrice: ['', [Validators.required, Validators.min(1)]],
      about: [''],
      perks: [''],
      issueCertificate: [false, Validators.required],
      level: ['Beginner', Validators.required],
      type: ['COURSE', Validators.required]
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
      position: ['1', Validators.required],
      content: ['', Validators.required],
    })
  }


  onSubmit() {
    console.log(this.courseForm.value)
    if (this.courseForm.valid) {
      this.courseService.updateCourse(this.courseForm.value);
    }
  }

  saveCourseTopics(){
    // this.loader = true
    // const payload: CourseTopicsDTO = {
    //   courseId: 1,
    //   duration: this.courseTopicForm.value.duration,
    //   name: this.courseTopicForm.value.name,
    //   position: this.courseTopicForm.value.position
    // }
    // this.token = this.localStorageService.get('token')
    // console.log(payload)
    // const sub = this.courseService.saveCourseTopic(payload, payload.courseId, this.token).subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error)
    //   }
    //   ).add(() => {
    //     (this.loader = false)
    //   });
  }
  saveCourseLesson() {

  }
  onSelectContentType() {
    const selectedIndex =
      this.courseLessonForm.value.contentType
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }
}
