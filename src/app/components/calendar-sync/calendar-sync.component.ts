import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-sync',
  templateUrl: './calendar-sync.component.html',
  styleUrl: './calendar-sync.component.scss'
})
export class CalendarSyncComponent implements OnInit {
isSyncing: boolean = false
synError: string = ''

ngOnInit(): void {
    
}

syncWithCalendar(): void{
this.isSyncing = true
}
}
