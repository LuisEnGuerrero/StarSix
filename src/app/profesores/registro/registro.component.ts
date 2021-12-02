import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../servicios/profesor.service';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from '../modelos/profesor';
import { Router } from '@angular/router';


@Component({
  selector: 'profesores-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class ProfesoresRegistroComponent implements OnInit {

    id: string | null = ""
    Nombres: string = ""
    Apellidos: string = ""
    Correo: string = ""
    Telefono: string = ""
    Institucion: string = "" 
    Materia: string = "" 
    Grupos: string [] = []
  

  constructor(private srv:ProfesorService, private aRoute: ActivatedRoute, private router:Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.cargarProfesor()
  }

  cargarProfesor(): void{
    if (this.id != null) {
    this.srv.cargarProfesor(this.id).subscribe(data => {
      this.Nombres= data.nombres
      this.Apellidos= data.apellidos
      this.Correo= data.correo
      this.Telefono= data.telefono
      this.Institucion= data.institucion
      this.Materia= data.materia
      this.Grupos= data.Grupos
      })}
  }

  guardarProfesor(): void {
    const profesor:Profesor = {
      _id: this.id,
      nombres: this.Nombres,
      apellidos: this.Apellidos,
      correo: this.Correo,
      telefono: this.Telefono,
      institucion: this.Institucion,
      materia: this.Materia,
      Grupos: this.Grupos
    }
    if (this.id != null) {
      this.srv.actualizarProfesor(profesor).subscribe(data => {
        console.log("Profesor Actualizado!");
        this.router.navigate(["/profesores"])
      })
    }
    else {
      this.srv.guardarNuevoProfesor(profesor).subscribe(data => {
        console.log("Profesor Guardado!");
        this.router.navigate(["/profesores"])
    })
  }}

 
}

/*

import { FormBuilder, FormGroup } from '@angular/forms';


   profesorForm:FormGroup;

    instituciones = [{ }]

    materias = [{ }]

    grupos = [{ }]

  constructor(private srv:ProfesorService, private aRoute: ActivatedRoute, private router:Router, private fb:FormBuilder) {
    this.id = this.aRoute.snapshot.paramMap.get('id'),
    this.profesorForm = this.fb.group({
      Institucion: [null],
      Materia: [null],
      Grupos: [null]
    })
   }

 ngOnInit(): void {
    this.cargarProfesor(),
    this.crearInstituciones(),
    this.crearMaterias(),
    this.crearGrupos()
  }



 crearInstituciones(): void {
    var direccion;

    const institucion:Institucion = {
      nombres: this.Nombres,
      _id: null,
      direccion: this.direccion,
      ciudad: this.ciudad,
      pais: this.pais,
      telefono: this.telefono
    }
    for (var i in institucion){
      this.instituciones.map(institucion.nombres)
    }
  }

*/
