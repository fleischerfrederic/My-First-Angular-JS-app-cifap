import { Component, OnInit } from '@angular/core';
//importer la classe du routeur

import {Router,ActivatedRoute,Params} from '@angular/router'

// 1# Importer la class du service
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',

  // 2# Ajouter le service dans le tableau des providers
  providers: [StudentService]
})
export class EditStudentComponent implements OnInit {

  // 3# Définir une variable pour utiliser le service
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ){};

  // Créer un objet vide
  selectedStudent =  {
    id: 0,
    firstName: '',
    lastName: '',
    // Le type number ne peut pas être vide
    state: 0
  };

  // Créer une fonction pour mettre à jour l'étudiant sélectionné
  editSelectedStudent(){ 
    
   this.router.navigateByUrl('/dashboard')

  };

  // Créer une fonction pour récupérer les données de l'étudiant sélectionné
  getSelectedStudentData(id){

    this.studentService.getSelectedStudentInfo(id).then(data => this.selectedStudent = data);

  };

  ngOnInit() {

    
  //recupere le parametre id de la router
  this.activatedRoute.params.forEach(

    params => {

      let id = +params['id'];
      this.getSelectedStudentData(id);

    }

  )

  };

}
