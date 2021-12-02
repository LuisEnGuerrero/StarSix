import { Component, OnInit } from '@angular/core';
import { InstitucionService } from '../servicios/institucion.service';
import { Institucion } from '../modelos/institucion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'instituciones-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class InstitucionesListadoComponent implements OnInit {

  instituciones:Institucion[]=[];

  constructor(private srv:InstitucionService, private router:Router) { }

  ngOnInit(): void {
    this.cargarInstituciones()
  }

  cargarInstituciones(): void {
    this.srv.cargarInstituciones().subscribe(data => {
      this.instituciones = data
    })
  }

  eliminarInstitucion(id: string | null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar esta Institución?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarInstitucion(id).subscribe(data => {
            console.log("Institución Eliminada!")
            this.cargarInstituciones()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarInstituciones()  }
      })
    }  
  }

}
