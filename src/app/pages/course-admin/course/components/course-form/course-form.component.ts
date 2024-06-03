import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseDetail } from '../../../../../models/course';
import { Category } from '../../../../../models/category';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit, OnChanges{
  courseForm!: FormGroup;
  courseTopicForm!: FormGroup;
  courseLessonForm!: FormGroup;
  loader: boolean = false;
  text= 'hello workd';
  categories: Category[] = [
    {id: 1, name: 'technology', description: ''}
  ]

  @Input() course?: CourseDetail | null;
  @Output() createOrUpdateCourse = new EventEmitter<CourseDetail>;
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      this.courseForm?.patchValue(changes['course'].currentValue || {});
      console.log(this.courseForm?.value)
    }
  }
  ngOnInit() {
    this.initialiseCourseForm();
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


  private initialiseCourseForm() {
    this.courseForm = this.fb.group({
      id: [],
      name: [ '', [ Validators.required, Validators.maxLength(255) ] ],
      description: [ '', Validators.required ],
      startDate: [ '', Validators.required ],
      endDate: [ '', Validators.required ],
      duration: [ '', Validators.required ],
      price: [ '', Validators.required ],
      status: [ 'DRAFT', Validators.required ],
      category: [ { 'id': 1 }, Validators.required ],
      discountedPrice: [ '', [ Validators.required, Validators.min(1) ] ],
      about: [ '' ],
      perks: [ '' ],
      issueCertificate: [ false, Validators.required ],
      level: [ 'BEGINNER', Validators.required ],
      type: [ 'COURSE', Validators.required ]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.createOrUpdateCourse.emit(this.courseForm.value);
    }
  }

  saveCourseTopics(){
  }
  saveCourseLesson() {

  }
  onSelectContentType() {
    const selectedIndex =
      this.courseLessonForm.value.contentType
  }

}
