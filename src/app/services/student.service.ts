////importer la classe pour configurer le service
import { Injectable } from '@angular/core';

//importer les classes http et headers
import { Http, Headers} from '@angular/http';

//importer le systeme de promesse
import 'rxjs/add/operator/toPromise';


//creer et exporter une collection de donnée
export const LIST = [
    { 
      id:0,
      firstName:'Georges',
      lastName:'Harrisson',
      state: 1

    },
    { 
      id:1,
      firstName:'Paul',
      lastName:'mc Cartney',
      state: 0
     },

     {
      id:2,
      firstName:'John',
      lastName:'Lennon',
      state: 2
      },

     {
      id:3,
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

    //crer une fonction pour ajouter un etudiant dans la liste 

addStudentInStudentList(formulaire){

  let newStudent={
       
      firstName:'Mick',
      lastName:'Jaegger',
      state: 0

    };

    //ajouter le nouvel étudiant dans le tableau

    LIST.push(formulaire);
  };

  //création d'une fonction pour connaitre la taille du tableau LIST

  getListLenght(): Promise<number>{

    return Promise.resolve(LIST.length) ;

  };

  
};



