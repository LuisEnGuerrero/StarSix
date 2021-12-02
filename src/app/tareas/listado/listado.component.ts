import { Component, OnInit } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';
import { Tarea } from '../modelos/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'tareas-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class TareasListadoComponent implements OnInit {

  tareas:Tarea[]=[]

  constructor(private srv:TareaService, private aRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargarTareas()
  }

  cargarTareas(): void {
    this.srv.cargarTareas().subscribe( data => {
      this.tareas = data
    })
  }

  eliminarTarea(id: string | null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar esta Tarea?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarTarea(id).subscribe(data => {
            console.log("Tarea Eliminada!")
            this.cargarTareas()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarTareas()  }
      })

    }
  }

}
