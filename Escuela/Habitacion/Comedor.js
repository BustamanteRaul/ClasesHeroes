import { Habitacion } from "./Habitacion.js";

export class Comedor extends Habitacion {
  constructor(
    metrosCuadrados,
    tomaCorrientes,
    internet,
    climatizacion,
    plazas,
  ) {
    super(metrosCuadrados, tomaCorrientes, internet, climatizacion);
    this.plazas = plazas;
  }
}
