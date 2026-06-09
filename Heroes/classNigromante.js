import Mago from "./classMago.js";

export default class Nigromante extends Mago {
  constructor(
    nombre,
    vida,
    stamina,
    arma,
    armadura,
    ropa,
    inventario,
    rango,
    velocidad_de_movimiento,
    mana,
    magia,
    almas,
    vinculo,
  ) {
    super(
      nombre,
      vida,
      stamina,
      arma,
      armadura,
      ropa,
      inventario,
      rango,
      velocidad_de_movimiento,
      mana,
      magia,
    );
    this.almas = almas;
    this.vinculo = vinculo;
  }
  invocar_almas(cantidad) {
    //invoca almas
    if (this.almas >= cantidad) {
      this.almas -= cantidad;
    }
  }
  controlar_almas() {
    //controla almas que cada uso te reste vinculo con el alma hasta que se pierda
    this.vinculo -= 1;
  }
  poseer_almas(cantidad) {
    //posee almas (suma al total)
    this.almas += cantidad;
  }
  desinvocar_almas(cantidad) {
    //desinvoca almas (devuelve ls que tenian)
    this.almas += cantidad;
  }
}
