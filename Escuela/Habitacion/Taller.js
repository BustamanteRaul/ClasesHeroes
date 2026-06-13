import { Habitacion } from "./Habitacion.js";

export class Taller extends Habitacion {
  constructor(
    metrosCuadrados,
    tomaCorrientes,
    internet,
    climatizacion,
    especialidad,
  ) {
    super(metrosCuadrados, tomaCorrientes, internet, climatizacion);
    this.especialidad = especialidad;
  }
}
