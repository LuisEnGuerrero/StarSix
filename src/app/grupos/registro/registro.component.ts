import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../servicios/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from '../modelos/grupo';
import { Router } from '@angular/router';


@Component({
  selector: 'grupos-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class GruposRegistroComponent implements OnInit {

  id: string | null = ""
  nombre: string = ""
  grado: string = ""
  cantidad_alumnos: number = 0
  tareas: string [] = []
  estudiantes: string [] = []


  constructor(private srv:GrupoService, private aRoute: ActivatedRoute, private router:Router) { 
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarGrupos()
  }

  cargarGrupos(): void {
    if (this.id != null) {
      this.srv.cargarGrupo(this.id).subscribe(data =>{
        this.nombre= data.nombre
        this.grado= data.grado
        this.cantidad_alumnos = data.cantidad_alumnos
        this.tareas= data.tareas
        this.estudiantes= data.estudiantes
      })
    }
  }

  guardarGrupo(): void {
    const grupo:Grupo = {
      _id: this.id,
      nombre: this.nombre,
      grado: this.grado,
      cantidad_alumnos: this.cantidad_alumnos,
      tareas: this.tareas,
      estudiantes: this.estudiantes
    }
    if (this.id != null) {
      this.srv.actualizarGrupo(grupo).subscribe(data => {
        console.log("Grupo Actualizado!");
        this.router.navigate(["/grupos"])
      })
    }
    else {
      this.srv.guardarNuevoGrupo(grupo).subscribe(data => {
        console.log("Grupo Guardado!");
        this.router.navigate(["/grupos"])
    })

  }}

}
