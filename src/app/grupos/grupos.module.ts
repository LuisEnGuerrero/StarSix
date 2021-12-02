import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GruposListadoComponent } from './listado/listado.component';
import { GruposRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    GruposListadoComponent,
    GruposRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    GruposListadoComponent,
    GruposRegistroComponent
  ]
})
export class GruposModule { }
