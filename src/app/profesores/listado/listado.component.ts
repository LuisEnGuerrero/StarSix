import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../servicios/profesor.service';
import { Profesor } from '../modelos/profesor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'profesores-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ProfesoresListadoComponent implements OnInit {

  profesores:Profesor[]=[];

  constructor(private srv:ProfesorService, private router:Router) { }

  ngOnInit(): void {
    this.cargarProfesores()
  }

  cargarProfesores(): void {
    this.srv.cargarProfesores().subscribe(data => {
      this.profesores = data
    })
  }

  eliminarProfesor(id: string | null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar este Profesor?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarProfesor(id).subscribe(data => {
            console.log("Profesor Eliminado!")
            this.cargarProfesores()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarProfesores()  }
      })
    }  
  }

}
