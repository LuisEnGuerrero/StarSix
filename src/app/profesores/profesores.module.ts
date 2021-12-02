import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfesoresListadoComponent } from './listado/listado.component';
import { ProfesoresRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ProfesoresListadoComponent,
    ProfesoresRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProfesoresListadoComponent,
    ProfesoresRegistroComponent
  ]
})
export class ProfesoresModule { }
