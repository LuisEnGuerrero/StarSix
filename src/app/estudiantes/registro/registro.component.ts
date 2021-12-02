import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';
import { Estudiante } from '../modelos/estudiante';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'estudiantes-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class EstudiantesRegistroComponent implements OnInit {

  id: string | null = ""
  nombres: string = ""
  apellidos: string = ""
  correo: string = ""
  telefono: string = ""
  acudiente: string = ""
  correo_acudiente: string = ""
  telefono_acudiente: string = ""
  institucion: string = ""

  constructor(private srv:EstudianteService, private aRoute: ActivatedRoute, private router:Router) { 
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarEstudiantes()
  }

  cargarEstudiantes(): void {
    if (this.id != null) {
      this.srv.cargarEstudiante(this.id).subscribe(data => {
        this.nombres = data.nombres
        this.apellidos = data.apellidos
        this.correo = data.correo
        this.telefono = data.telefono
        this.acudiente = data.acudiente
        this.correo_acudiente = data.correo_acudiente
        this.telefono_acudiente = data.telefono_acudiente
        this.institucion = data.institucion
        console.log(this.nombres)
      })
    }
  }

  guardarEstudiante(): void {
    const estudiante:Estudiante = {
      _id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      correo: this.correo,
      telefono: this.telefono,
      acudiente: this.acudiente,
      correo_acudiente: this.correo_acudiente,
      telefono_acudiente: this.telefono_acudiente,
      institucion: this.institucion,
    }
    if (this.id != null) {
      this.srv.actualizarEstudiante(estudiante).subscribe( data => {
        console.log("Estudiante Actualizado!");
        this.router.navigate(["/estudiantes"])
      })
    }
    else {
      this.srv.guardarNuevoEstudiante(estudiante).subscribe( data => {
        console.log("Estudiante Guardado!");
        this.router.navigate(["/estudiantes"])
      })
    }
  }

}
