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
  {id:1,content:"hello world"},
  {id:2,content:"hey world"}
]
  }
  initializeHightlights():void{
    this.highlights = [
      {id:1,content:"hello world"},
      {id:2,content:"hey world"}
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
