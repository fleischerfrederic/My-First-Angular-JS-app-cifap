// Inmporter la class component pour configuer le composant
// La class OnInit permet d'éxécuter du code une fois que le composant est chargé
import { Component, OnInit } from '@angular/core';

// 1# Importer la class du service
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

  // 2# Ajouter le service dans le tableau des providers
  providers: [StudentService]

})

// Pour faire fonctionner OnInit il faut l'implémenter dasn la class
export class DashboardComponent implements OnInit {

  // Créer une variable pour récupérer les données du service
  myStudentList: any[];

  // 3# Définir une variable pour utiliser le service
  constructor(
    private studentService: StudentService
  ){}

  // Créer une fonction pour récupérer la liste des étudiants
  getStudentFromService(){
    this.studentService.showStudentList().then( data => this.myStudentList = data );
  };


  // La fonction ngOnInit est exécuter quand la composant est chargé
  ngOnInit() {

    // Appeler la fonction pour récupérer la liste des étudiants
    this.getStudentFromService();

  }

}
