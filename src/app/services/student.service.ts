////importer la classe pour configurer le service
import { Injectable } from '@angular/core';

//importer les classes http et headers
import { Http, Headers} from '@angular/http';

//importer le systeme de promesse
import 'rxjs/add/operator/toPromise';


//creer et exporter une collection de donnée
export const LIST = [
    { 
      firstName:'Georges',
      lastName:'Harrisson',
      state: 1

    },
    {
      firstName:'Paul',
      lastName:'mc Cartney',
      state: 0
     },

     {
      firstName:'John',
      lastName:'Lennon',
      state: 2
      },

     {
      firstName:'Ringo',
      lastName:'Star',
      state: 0
    }


  ];




//utiliser le decorateur @injectable()
@Injectable()

//exporter la classe du service
export class StudentService {

  constructor(//creer une variable de type Http
    private http:Http) { }

  

 //creer une fonction pour afficher la liste des etudiants
    showStudentList(): Promise<any[]>{

      //renvoyer le contenu de la liste 

      return Promise.resolve(LIST);

     
    };




}
