import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items !: MenuItem[];

  ngOnInit(){
    this.items = [
      
    {label: 'home', icon: 'pi pi-fw pi-home', routerLink:['/home']},

    {label: 'personne',icon: 'pi pi-fw pi-user',routerLink:['/listepersonne']},

  ]

  }
}
