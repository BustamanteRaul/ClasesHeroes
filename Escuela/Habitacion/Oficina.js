import { Habitacion } from "./Habitacion.js";

export class Oficina extends Habitacion {
  constructor(
    metrosCuadrados,
    tomaCorrientes,
    internet,
    climatizacion,
    computadora,
    impresora,
    puesto,
  ) {
    super(metrosCuadrados, tomaCorrientes, internet, climatizacion);
    this.computadora = computadora;
    this.impresora = impresora;
    this.puesto = puesto;
  }
}
