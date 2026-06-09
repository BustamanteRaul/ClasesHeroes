export default class Heroe {
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
  ) {
    this.nombre = nombre;
    this.vida = vida;
    this.stamina = stamina;
    this.arma = arma;
    this.armadura = armadura;
    this.ropa = ropa;
    this.inventario = inventario;
    this.rango = rango;
    this.velocidad_de_movimiento = velocidad_de_movimiento;
  }

  saltar() {
    //salta
    this.stamina -= 10;
  }

  correr() {
    //corre
    this.stamina -= 5;
  }

  agacharse() {
    //(agacha cuando se para deberia volver a normal)
    this.velocidad_de_movimiento = this.velocidad_de_movimiento / 2;
  }

  ataque_basico() {
    //ataca
    this.stamina -= 15;
    // this.arma.usar() el arma deberia ser un objeto quizas
  }
}
