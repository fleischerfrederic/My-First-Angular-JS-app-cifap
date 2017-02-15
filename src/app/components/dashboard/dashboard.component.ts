//importer la classe component pour configurer le composant
//la classe OnInit permetd'executer du code une fois le composant chargé


import { Component, OnInit } from '@angular/core';

//importer la classe du service
import{StudentService} from '../../services/student.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

  //Ajouter le service dans le tableau des providers
  providers:[StudentService]
})

//pour faire fonctionner OnIniT IL FAUT L4IMPLEMENTER DANS LA CLASSE
export class DashboardComponent implements OnInit {

  //creer une variable pour recuper les donnees du service 

  myStudentList: any[];

// définir une variable pour utiliser le service 

  constructor(
    private studentService:StudentService ) { }

    //creer une fonction pour recuperer la liste des etudiants

    getStudentFromService(){
      this.studentService.showStudentList().then( data=> this.myStudentList=data);
    }



//LA fonction ngOnInit est executée quand le composant est chargé
  ngOnInit() { 
    this.getStudentFromService()
  }
  //appeler la fonction pour recupere la liste des etudiants


}

