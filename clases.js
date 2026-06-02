class Heroe {
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
  }

  correr() {
    //corre
  }

  agacharse() {
    //agacha
  }

  ataque_basico() {
    //ataca
  }
}

class Mago extends Heroe {
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
  }
  hechizo_ligero() {
    //lanza hechizo
  }
  recuperar_mana() {
    //recupera mana
  }
  fijar_enemigo(enemigo) {
    //fija enemigo
  }
}

class Nigromante extends Mago {
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
  invocar_almas() {
    //invoca almas
  }
  controlar_almas() {
    //controla almas
  }
  poseer_almas() {
    //posee almas
  }
  desinvocar_almas() {
    //desinvoca almas
  }
}

class Arquero extends Heroe {
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
    //apunta
  }

  recargar_arco() {
    //recarga arco
  }

  disparar() {
    //dispara
  }
}

class Guerrero extends Heroe {
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
}

const guerrero = new Guerrero(
  "Guerrero",
  100,
  100,
  "Espada",
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
);
const arquero = new Arquero(
  "Arquero",
  100,
  100,
  "Arco",
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
);
const nigromante = new Nigromante(
  "Nigromante",
  100,
  100,
  "Espada",
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
);

console.log(guerrero, arquero, nigromante);
