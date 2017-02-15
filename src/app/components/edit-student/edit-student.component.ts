import { Component, OnInit } from '@angular/core';


//importer la classe du service
import{StudentService} from '../../services/student.service'


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',

  //Ajouter le service dans le tableau des providers
  providers:[StudentService]
})

export class EditStudentComponent implements OnInit {

  constructor(
    private studentService:StudentService ) {}

  ngOnInit() {
  }

}
