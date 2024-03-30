import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrl: './catalogue-page.component.scss'
})
export class CataloguePageComponent {

  nav = [
    {
      name:"Categories"
    },
    {
      name:"Level"
    },
    {
      name:"Price"
    },
    {
      name:"Type"
    },
    {
      name:"Duration"
    }
  ]

  filter = [ 
    { name: "Sort by most popular" }, 
    { name: "ReactJS" }, 
    { name: "Angular" }, 
    { name: "Bootstrap" }, 
    { name: "PrimeNG" }, 
  ]; 
}
