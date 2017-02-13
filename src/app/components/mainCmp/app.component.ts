import { Component } from '@angular/core';
//Pour pouvoir utiliser le ngModel, 


@Component({
  selector: 'my-app',
 
//ajouter un fichier HTML pour la vue : tout le chemin depuis la racine  (src)
templateUrl:'app/components/mainCmp/app.component.html'
})
export class AppComponent  { name = 'fred';


  myNumber=20;

  myCollection=['Pierre','Paul','Jacques'];
 }

