import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerPersonneComponent } from './component/personne/lister-personne/lister-personne.component';
import { HomeComponent } from './component/home/home/home.component';
import { AjouterPersonneComponent } from './component/personne/ajouter-personne/ajouter-personne.component';
import { ModifierPersonneComponent } from './component/personne/modifier-personne/modifier-personne.component';

const routes: Routes = [
   {
    path :'home',
    component:HomeComponent
   },

   {
    path :'listepersonne',
    component:ListerPersonneComponent
   },

   {
    path :'create-personne',
    component:AjouterPersonneComponent
   },

   {
    path :'modifier-personne/:id',
    component:ModifierPersonneComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
