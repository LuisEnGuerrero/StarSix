import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../servicios/grupo.service';
import { Grupo } from '../modelos/grupo';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'grupos-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class GruposListadoComponent implements OnInit {

  grupos:Grupo[]=[];

  constructor(private srv:GrupoService, private aRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargarGrupos()
  }

  cargarGrupos(): void {
    this.srv.cargarGrupos().subscribe(data => {
      this.grupos = data
    })
  }

  eliminarGrupo(id: string | null): void {
    if (id != null) {
      Swal.fire({
        title: 'Realmente desea Eliminar este Grupo?',
        text: 'Elige la Opción Correcta:', 
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) =>{
        if (result.value) {
          this.srv.eliminarGrupo(id).subscribe(data => {
            console.log("Grupo Eliminado!")
            this.cargarGrupos()    
        }
          )} else if (result.dismiss === Swal.DismissReason.cancel) {this.cargarGrupos()  }
      })
    }  
  }

}
