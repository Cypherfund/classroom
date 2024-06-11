import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPartComponent } from './lesson-part.component';

describe('LessonPartComponent', () => {
  let component: LessonPartComponent;
  let fixture: ComponentFixture<LessonPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessonPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
