import Heroe from "./classHeroe.js";

export default class Mago extends Heroe {
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
    this.mana = mana;
    this.magia = magia;
  }

  hechizo_fuerte() {
    //lanza hechizo
    this.mana -= 50;
  }
  hechizo_ligero() {
    //lanza hechizo
    this.mana -= 10;
  }
  recuperar_mana() {
    //recupera mana
    this.mana += 10;
  }
  fijar_enemigo(enemigo) {
    //fija enemigo (que cueste stamina fijar)
    this.stamina -= 1;
  }
}
