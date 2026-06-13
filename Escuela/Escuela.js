import { Direccion } from "./Direccion.js";

export class Escuela {
  constructor(nombre, direccion, personal, habitaciones, cursos) {
    this.nombre = nombre;
    this.direccion = new Direccion(direccion);
    this.personal = personal;
    this.habitaciones = habitaciones;
    this.cursos = cursos;
  }

  addPersonal(personal) {
    this.personal.push(personal);
  }

  addHabitacion(habitacion) {
    this.habitaciones.push(habitacion);
  }

  addCurso(curso) {
    this.cursos.push(curso);
  }
}
