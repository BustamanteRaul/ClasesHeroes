import Arquero from "./classArquero.js";
import Guerrero from "./classGuerrero.js";
import Nigromante from "./classNigromante.js";

const guerrero = new Guerrero(
  "Guerrero",
  100,
  100,
  "Espada",
  "Pesada",
  "Basica",
  ["Objeto1", "Objeto2"],
  "Principiante",
  "Lento",
  "Alta",
  50,
  "Media",
);
const arquero = new Arquero(
  "Arquero",
  100,
  100,
  "Arco",
  "De cuero",
  "Colorida",
  ["Manzana", "Moneda de oro"],
  "Intermedio",
  "Rapido",
  100,
  10,
  35,
);
const nigromante = new Nigromante(
  "Nigromante",
  100,
  100,
  "Baculo",
  "Null",
  "Oscura",
  ["Frasco de almas"],
  "Alto",
  "Intermedio",
  100,
  100,
  67,
  100,
);

console.table(guerrero);
console.table(arquero);
console.table(nigromante);
