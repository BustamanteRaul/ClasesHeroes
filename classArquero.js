import Heroe from "./classHeroe.js";

export default class Arquero extends Heroe {
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
    concentracion,
    flechas,
    alcanze,
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
    this.flechas = flechas;
    this.concentracion = concentracion;
    this.alcanze = alcanze;
  }

  apuntar() {
    //Mientras dure drenar stamina, deberia ser un while este activo drenar stamina.
    this.stamina -= 1;
  }

  recargar_arco() {
    //Las saca del carcaj, no la pierde, si destensa el arco se la deberia devolver al inventario
    this.flechas -= 1;
  }

  disparar() {
    //Usar el alcanze y rango(nivel) para determinar como es el golpe
    console.log(
      `El arquero disparo una flecha a: ${this.alcanze * (this.rango / 2)} metros`,
    );
  }
}
