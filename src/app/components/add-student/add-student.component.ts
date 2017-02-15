import { Component, OnInit } from '@angular/core';

// 1# Importer la class du service
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',

  // 2# Ajouter le service dans le tableau des providers
  providers: [StudentService]

})
export class AddStudentComponent implements OnInit {

  // Créer un objet vide qui reprend la stucture des objets du service
  newStudent =  {
    id: 0,
    firstName: '',
    lastName: '',
    // Le type number ne peut pas être vide
    state: 0
  };

  // Création d'une variable pour récupérer la taille de la liste d'étudiants
  myListLength: number;

  // 3# Définir une variable pour utiliser le service
  constructor(
    private studentService: StudentService
  ){};

  // Créer une fonction pour vider le formulaire
  resetInput(){
    // Annuler la modification de l'objet par l'utilisateur
    this.newStudent =  {
      id: 0,
      firstName: '',
      lastName: '',
      // Le type number ne peut pas être vide
      state: 0
    };
  };


  // Créer une fonction pour ajouter un étudiant dans la liste du service
  addNewStudent(object){
    // Appeler la fonction du service en lui envoyer un nouvel objet
    this.studentService.addStudentInStudentList(object);

    // Vider le formulaire
    this.resetInput();

    // Actualiser la valeur de la taille du tableau LIST
    this.getNextStudentId();
  };

  // Créer une fonction pour connâitre la taille du tableau LIST du service
  getNextStudentId(){

    this.studentService.getListLength().then( number => this.newStudent.id = number );

  };


  ngOnInit() {
    // Connaître la taille du tableau LIST au chargement du composant
    this.getNextStudentId();
  };

}
