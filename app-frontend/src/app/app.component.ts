import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-frontend';
  items !: MenuItem[];
  ngOnInit(){
    this.items = [
      
    {
        label: 'home',
        icon: 'pi pi-fw pi-home',
     },

     {
      label: 'personne',
      icon: 'pi pi-fw pi-user',
   },

  ]

  }

}
