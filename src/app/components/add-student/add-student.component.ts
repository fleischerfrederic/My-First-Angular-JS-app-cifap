import { Component, OnInit } from '@angular/core';



//importer la classe du service
import{StudentService} from '../../services/student.service'


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',

    //Ajouter le service dans le tableau des providers
  providers:[StudentService]
})



export class AddStudentComponent implements OnInit {

  //creer un objet vide qui reprend la structure des objets du service

  newStudent= {
    id:0,
    firstName:'',
    lastName:'',
    //le type number ne peut pas etre vide
    state:0
  };
//creation de la variable qui recupere la liste d'etudiant

  myListLenght;

  // définir une variable pour utiliser le service 

  constructor(
    private studentService:StudentService ) {}



//creer une fonction pour creer le formulaire

resetInput(){
  this.newStudent={
    id:0,
    firstName:'',
    lastName:'',
    state:0,
  };
};

    //Creer une fonction pour ajouter un etudiant dans la liste du service
    addNewStudent(formulaire){

      //appeler la fonction du service en lui envoyant un nouvel objet (formulaire)
     
      this.studentService.addStudentInStudentList(formulaire);
      this.resetInput();

      this.getNextStudentId();
    };

    

//cree une fonction pour connaitre la taille du tableau LIST du service

getNextStudentId(){

  this.studentService.getListLenght().then(number=>this.newStudent.id=number);
};

  ngOnInit() {
//connaitre la taille du tableau LIST au chargement du composant

    this.getNextStudentId();


    
  };

}
