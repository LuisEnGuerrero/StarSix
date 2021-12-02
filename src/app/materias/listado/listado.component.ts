import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../servicios/materia.service';
import { Materia } from '../modelos/materia';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class MateriasListadoComponent implements OnInit {

  materias:Materia[]= []

  constructor(private srv:MateriaService, private router:Router) { }

  ngOnInit(): void {
    this.cargarMaterias()
  }

  cargarMaterias(): void {
    this.srv.cargarMaterias().subscribe( data => {
      this.materias = data
    })
  }

  eliminarMateria(id: string| null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar esta Materia?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarMateria(id).subscribe(data => {
            console.log("Materia Eliminada!")
            this.cargarMaterias()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarMaterias()  }
      })
    }
  }

}
