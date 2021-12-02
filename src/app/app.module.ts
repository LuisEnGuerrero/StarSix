import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { GruposModule } from './grupos/grupos.module';
import { InstitucionesModule } from './instituciones/instituciones.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { TareasModule } from './tareas/tareas.module';
import { MateriasModule } from './materias/materias.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudiantesModule,
    GruposModule,
    InstitucionesModule,
    ProfesoresModule,
    TareasModule,
    MateriasModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
