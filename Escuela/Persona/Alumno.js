import { Persona } from "./Persona.js";

export class Alumno extends Persona {
  constructor(nombre, edad, telefono, direccion, promedio) {
    super(nombre, edad, telefono, direccion);
    this.promedio = promedio;
  }
}
