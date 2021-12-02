import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MateriasListadoComponent } from './listado/listado.component';
import { MateriasRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    MateriasListadoComponent,
    MateriasRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MateriasListadoComponent,
    MateriasRegistroComponent
  ]
})
export class MateriasModule { }
