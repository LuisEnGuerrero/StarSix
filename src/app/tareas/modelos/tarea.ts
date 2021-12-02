export interface Tarea {
    _id: String | null,
    titulo: String,
    descripcion: String,
    entregada: Boolean,
    calificacion: Number,
    fecha_entrega: Date, 
    fecha_vencimiento: Date,
    materia: String
}
