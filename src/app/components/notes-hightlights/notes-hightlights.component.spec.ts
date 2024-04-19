import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHightlightsComponent } from './notes-hightlights.component';

describe('NotesHightlightsComponent', () => {
  let component: NotesHightlightsComponent;
  let fixture: ComponentFixture<NotesHightlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesHightlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesHightlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
