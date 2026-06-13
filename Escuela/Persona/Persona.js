import { Direccion } from "../Direccion.js";

export class Persona {
  constructor(nombre, edad, telefono, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.direccion = new Direccion(direccion);
  }
}
