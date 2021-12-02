import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesListadoComponent } from './estudiantes/listado/listado.component';
import { EstudiantesRegistroComponent } from './estudiantes/registro/registro.component';
import { GruposListadoComponent } from './grupos/listado/listado.component';
import { GruposRegistroComponent } from './grupos/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { InstitucionesListadoComponent } from './instituciones/listado/listado.component';
import { InstitucionesRegistroComponent } from './instituciones/registro/registro.component';
import { MateriasListadoComponent } from './materias/listado/listado.component';
import { MateriasRegistroComponent } from './materias/registro/registro.component';
import { ProfesoresListadoComponent } from './profesores/listado/listado.component';
import { ProfesoresRegistroComponent } from './profesores/registro/registro.component';
import { TareasListadoComponent } from './tareas/listado/listado.component';
import { TareasRegistroComponent } from './tareas/registro/registro.component';

const routes: Routes = [
  { path:"", redirectTo:"/home", pathMatch:'full' },
  { path:"home", component: HomeComponent },
  { path:"instituciones", component: InstitucionesListadoComponent },
  { path:"instituciones/registro", component: InstitucionesRegistroComponent },
  { path:"instituciones/registro/:id", component: InstitucionesRegistroComponent },
  { path:"estudiantes", component: EstudiantesListadoComponent },
  { path:"estudiantes/registro", component: EstudiantesRegistroComponent },
  { path:"estudiantes/registro/:id", component: EstudiantesRegistroComponent },
  { path:"grupos", component: GruposListadoComponent },
  { path:"grupos/registro", component: GruposRegistroComponent },
  { path:"grupos/registro/:id", component: GruposRegistroComponent },
  { path:"profesores", component: ProfesoresListadoComponent },
  { path:"profesores/registro", component: ProfesoresRegistroComponent },
  { path:"profesores/registro/:id", component: ProfesoresRegistroComponent },
  { path:"tareas", component: TareasListadoComponent },
  { path:"tareas/registro", component: TareasRegistroComponent },
  { path:"tareas/registro/:id", component: TareasRegistroComponent },
  { path:"materias", component: MateriasListadoComponent },
  { path:"materias/registro", component: MateriasRegistroComponent },
  { path:"materias/registro/:id", component: MateriasRegistroComponent },
  { path:"**", redirectTo:"/home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
  { path:"home", component: PrincipalComponent },
  { path:"productos", component: ProductosListadoComponent },
  { path:"productos/registro", component: ProductosRegistroComponent },
  { path:"productos/registro/:id", component: ProductosRegistroComponent },
  { path:"clientes", component: ClientesListadoComponent },
  { path:"clientes/registro", component: ClientesRegistroComponent }

*/