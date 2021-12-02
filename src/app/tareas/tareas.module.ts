import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TareasRegistroComponent } from './registro/registro.component';
import { TareasListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    TareasRegistroComponent,
    TareasListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TareasListadoComponent,
    TareasRegistroComponent
  ]
})
export class TareasModule { }
