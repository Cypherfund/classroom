import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-hightlights',
  templateUrl: './notes-hightlights.component.html',
  styleUrl: './notes-hightlights.component.scss'
})
export class NotesHightlightsComponent implements OnInit{

  notes: {id:number, content:string}[]= []
  highlights: {id:number, content:string}[]= []

  constructor(){ }

  ngOnInit(): void {
      this.initializeNotes()
      this.initializeHightlights()
  }

  initializeNotes():void{
this.notes = [
  {id:1,content:"Angular is a popular open-source framework for building dynamic web applications. Developed and maintained by Google, Angular provides a comprehensive solution for front-end development, allowing developers to create powerful single-page applications (SPAs) with ease."},
  {id:2,content:"Angular follows a component-based architecture, where the application is composed of reusable and encapsulated components. This makes it easier to develop, maintain, and test applications."}
]
  }
  initializeHightlights():void{
    this.highlights = [
      {id:1,content:"Angular is a popular open-source framework for building dynamic web applications."},
      {id:2,content:"This makes it easier to develop."}
    ]
  }
  editNote(note:{id:number,content:string}): void{
console.log('Editing note',note);

  }
  deleteNote(note:{id:number,content:string}): void{
    console.log('Deleting note',note)
    this.notes = this.notes.filter(n => n.id !== note.id)
  }
  editHightlight(highlight:{id:number,content:string}): void{
    console.log('Editing hightlight',highlight);
  }
  deleteHightlight(highlight:{id:number,content:string}): void{
    console.log('Deleting hightlight',highlight);
    this.highlights = this.highlights.filter(h =>h.id !== highlight.id)
  }
}
