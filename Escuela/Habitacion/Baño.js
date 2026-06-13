import { Habitacion } from "./Habitacion.js";

export class Baño extends Habitacion {
  constructor(
    metrosCuadrados,
    tomaCorrientes,
    internet,
    climatizacion,
    lavamanos,
    inodoros,
  ) {
    super(metrosCuadrados, tomaCorrientes, internet, climatizacion);
    this.lavamanos = lavamanos;
    this.inodoros = inodoros;
  }
}
