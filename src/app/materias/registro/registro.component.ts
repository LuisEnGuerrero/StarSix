import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../servicios/materia.service';
import { Materia } from '../modelos/materia';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class MateriasRegistroComponent implements OnInit {

  id: string | null = ""
  nombre: string = ""
  grado: string = ""


  constructor(private srv:MateriaService, private aRoute: ActivatedRoute, private router:Router) { 
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarMaterias()
  }

  cargarMaterias(): void {
    if (this.id != null) {
      this.srv.cargarMateria(this.id).subscribe( data => {
        this.nombre = data.nombre
        this.grado = data.grado
      })
    }
  }

  guardarMateria(): void {
    const materia:Materia = {
      _id: this.id,
      nombre: this.nombre,
      grado: this.grado,
    }
    if (this.id != null) {
      this.srv.actualizarMateria(materia).subscribe(data => {
        console.log("Materia Actualizada!");
        this.router.navigate(["/materias"])
      })
    }
    else {
      this.srv.guardarNuevaMateria(materia).subscribe( data => {
        console.log("Materia Guardada Correctamente!");
        this.router.navigate(["/materias"])
      })
    }
  }

}
