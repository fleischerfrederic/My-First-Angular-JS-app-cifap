//importer les classes nécessaires à l'utilisation des routes
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importer les composants à utiliser dans les routes

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';


//declarer un constante =variable non modifiable ( type : route)

const appRoutes : Routes =[
    {
        // {redirection de la page d'accueil
        path:'',
        redirectTo :'dashboard',
        pathMatch:'full'
    },
{
        // dedinir l'adresse
        path:'dashboard',
       
        // definir le composant à utiliser 
        component:DashboardComponent,

    },
  {
        // dedinir l'adresse
        path:'add-student',
       
        // definir le composant à utiliser 
        component:AddStudentComponent,

    } ,
 {
        // dedinir l'adresse
        path:'edit-student',
       
        // definir le composant à utiliser 
        component:EditStudentComponent,

    }
];

//exporter la constante des routes 

export const Routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
