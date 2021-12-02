import { Component, OnInit } from '@angular/core';
import { InstitucionService } from '../servicios/institucion.service';
import { ActivatedRoute } from '@angular/router';
import { Institucion } from '../modelos/institucion';
import { Router } from '@angular/router';



@Component({
  selector: 'instituciones-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class InstitucionesRegistroComponent implements OnInit {

  id:string | null= ""
  Nombres:string = ""
  Direccion:string = ""
  Ciudad:string = ""
  Pais:string = ""
  Telefono:string = ""


  constructor(private srv:InstitucionService, private aRoute: ActivatedRoute, private router:Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.cargarInstitucion()
  }

  cargarInstitucion(): void{
    if (this.id != null) {
    this.srv.cargarInstitucion(this.id).subscribe(data => {
      this.Nombres=data.nombres
      this.Direccion=data.direccion
      this.Ciudad=data.ciudad
      this.Pais=data.pais
      this.Telefono=data.telefono
    })}
  }

  guardarInstitucion(): void {
    const institucion:Institucion = {
      _id: this.id,
      nombres: this.Nombres,
      direccion: this.Direccion,
      ciudad: this.Ciudad,
      pais: this.Pais,
      telefono: this.Telefono
    }
    if (this.id != null) {
      this.srv.actualizarInstitucion(institucion).subscribe(data => {
        console.log("Institución Actualizada!");
        this.router.navigate(["/instituciones"])
      })
    }
    else {
      this.srv.guardarNuevaInstitucion(institucion).subscribe(data => {
        console.log("Institución Guardada!");
        this.router.navigate(["/instituciones"])
    })
  }}

}
