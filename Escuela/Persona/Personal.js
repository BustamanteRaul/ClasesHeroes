import { Persona } from "./Persona.js";

export class Personal extends Persona {
  constructor(nombre, edad, telefono, direccion, antiguedad, salario) {
    super(nombre, edad, telefono, direccion);
    this.antiguedad = antiguedad;
    this.salario = salario;
  }
}
