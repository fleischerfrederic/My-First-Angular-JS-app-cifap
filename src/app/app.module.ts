import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from'./components/mainCmp/app.component';
import{FormsModule} from '@angular/forms';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditStudentComponent} from './components/edit.student/edit.student.component';
import {AddStudentComponent} from './components/add.student/add.student.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,DashboardComponent,EditStudentComponent, AddStudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 
 }
