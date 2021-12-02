import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InstitucionesListadoComponent } from './listado/listado.component';
import { InstitucionesRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    InstitucionesListadoComponent,
    InstitucionesRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    InstitucionesListadoComponent,
    InstitucionesRegistroComponent
  ]
})
export class InstitucionesModule { }
