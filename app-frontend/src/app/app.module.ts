import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { AjouterPersonneComponent } from './component/personne/ajouter-personne/ajouter-personne.component';
import { ListerPersonneComponent } from './component/personne/lister-personne/lister-personne.component';
import { ModifierPersonneComponent } from './component/personne/modifier-personne/modifier-personne.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { HomeComponent } from './component/home/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AjouterPersonneComponent,
    ListerPersonneComponent,
    ModifierPersonneComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
