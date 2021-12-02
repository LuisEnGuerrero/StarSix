import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EstudiantesListadoComponent } from './listado/listado.component';
import { EstudiantesRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    EstudiantesListadoComponent,
    EstudiantesRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EstudiantesListadoComponent,
    EstudiantesRegistroComponent
  ]
})
export class EstudiantesModule { }
