import { Habitacion } from "./Habitacion.js";

export class Aula extends Habitacion {
  constructor(
    metrosCuadrados,
    tomaCorrientes,
    internet,
    climatizacion,
    mesas,
    sillas,
    cursoAsignado,
  ) {
    super(metrosCuadrados, tomaCorrientes, internet, climatizacion);
    this.mesas = mesas;
    this.sillas = sillas;
    this.cursoAsignado = cursoAsignado;
  }
}
