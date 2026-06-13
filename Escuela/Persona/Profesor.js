import { Personal } from "./Personal.js";

export class Profesor extends Personal {
  constructor(nombre, edad, telefono, direccion, puntos) {
    super(nombre, edad, telefono, direccion);
    this.puntos = puntos;
  }
}
