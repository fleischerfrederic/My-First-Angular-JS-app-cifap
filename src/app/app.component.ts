import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} , how are you ?</h1>`,
  styles:[`
  h1{
    color:red;
    text-transform:uppercase;
  }`]
})
export class AppComponent  { name = 'fred';
 }
