import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-hightlights',
  templateUrl: './notes-hightlights.component.html',
  styleUrl: './notes-hightlights.component.scss'
})
export class NotesHightlightsComponent implements OnInit{

  notes: {id:number, content:string}[]= []
  hightlights: {id:number, content:string}[]= []

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
    this.hightlights = [
      {id:1,content:"hello world"},
      {id:2,content:"hey world"}
    ]
  }
  editNote(note:{id:number,content:string}): void{
console.log('Editing note',note);

  }
  deleteNote(note:{id:number,content:string}): void{
    
  }
  editHightlight(note:{id:number,content:string}): void{
    console.log('Editing hightlight');
  }
  deleteHightlight(note:{id:number,content:string}): void{
    
  }
}
