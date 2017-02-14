// importer les classes pour importer le module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// importer le module des routes

import {Routing} from'./routing';

// importer le composant principal , les composants de l'application (pages)

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HeaderComponent } from './directive/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



//ajouter tous les composants dans le tableau des declarations
@NgModule ({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditStudentComponent,
    AddStudentComponent,
    HeaderComponent,
    FooterComponent
  ],

  // ajouter les modules dans le tableau des imports 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // ajouter la classe des routes

    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
