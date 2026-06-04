import Heroe from "./classHeroe.js";

export default class Guerrero extends Heroe {
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
    destreza,
    ira,
    velocidad,
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
    );
    this.destreza = destreza;
    this.ira = ira;
    this.velocidad = velocidad;
  }

  generarIra() {
    this.ira += 1;
  }

  embestida() {
    this.ira -= 10;
    this.stamina -= 10;
  }

  ataqueConArma() {
    //El daño se deberia medir a partir del rango, del arma, etc.
    this.stamina -= 20;
  }
}
