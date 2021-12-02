import { Component, OnInit } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';
import { Tarea } from '../modelos/tarea';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'tareas-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class TareasRegistroComponent implements OnInit {

  id: string | null= ""
  titulo: string= ""
  descripcion: string= ""
  entregada: boolean= false
  calificacion: number= 0.0
  fecha_entrega: Date = new Date()
  fecha_vencimiento: Date = new Date()
  materia: string= ""


  constructor(private srv:TareaService, private aRoute: ActivatedRoute, private router:Router) { 
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarTareas()
  }

  cargarTareas(): void {
    if (this.id != null) {
      this.srv.cargarTarea(this.id).subscribe(data => {
        this.titulo = data.titulo
        this.descripcion = data.descripcion
        this.entregada = data.entregada
        this.calificacion = data.calificacion
        this.fecha_entrega = data.fecha_entrega
        this.fecha_vencimiento = data.fecha_vencimiento
        this.materia = data.materia
      })
    }
  }

  guardarTarea(): void {
    const tarea:Tarea = {
      _id: this.id,
      titulo: this.titulo,
      descripcion: this.descripcion,
      entregada: this.entregada,
      calificacion: this.calificacion,
      fecha_entrega: this.fecha_entrega,
      fecha_vencimiento: this.fecha_vencimiento,
      materia: this.materia,
    }
    if (this.id != null) {
      this.srv.actualizarTarea(tarea).subscribe( data => {
        console.log("Tarea Actualizada!");
        this.router.navigate(["/tareas"])
      })
    }
    else {
      this.srv.guardarNuevaTarea(tarea).subscribe( data => {
        console.log("Tarea Guardada");
        this.router.navigate(["/tareas"])
      })
    }
  }

}
