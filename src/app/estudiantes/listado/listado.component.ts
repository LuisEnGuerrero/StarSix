import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';
import { Estudiante } from '../modelos/estudiante';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'estudiantes-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class EstudiantesListadoComponent implements OnInit {

  estudiantes:Estudiante[]= []
  
  constructor(private srv:EstudianteService, private aRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargarEstudiantes()
  }

  cargarEstudiantes(): void {
    this.srv.cargarEstudiantes().subscribe(data => {
      this.estudiantes = data
    })
  }

  eliminarEstudiante(id: string | null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar este Estudiante?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarEstudiante(id).subscribe(data => {
            console.log("Estudiante Eliminado!")
            this.cargarEstudiantes()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarEstudiantes()  }
      })
    }
  }

}
