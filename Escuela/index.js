import { Escuela } from "./Escuela.js";
import { Aula } from "./Habitacion/Aula.js";
import { Taller } from "./Habitacion/Taller.js";
import { Comedor } from "./Habitacion/Comedor.js";
import { Oficina } from "./Habitacion/Oficina.js";
import { Alumno } from "./Persona/Alumno.js";
import { Profesor } from "./Persona/Profesor.js";
import { Curso } from "./Curso/Curso.js";
import { Materia } from "./Curso/Materia.js";

const direccionEscuela = {
  calle: "Av. Siempre Viva",
  numero: 742,
  ciudad: "Springfield",
  provincia: "Buenos Aires",
  codigoPostal: "1900",
};

const alumnos = [
  new Alumno("Juan", 15, "123456789", { calle: "Calle 1", numero: 100, ciudad: "Springfield", provincia: "Buenos Aires", codigoPostal: "1900" }, 8.5),
  new Alumno("María", 14, "987654321", { calle: "Calle 2", numero: 200, ciudad: "Springfield", provincia: "Buenos Aires", codigoPostal: "1900" }, 9.0),
  new Alumno("Pedro", 15, "456789123", { calle: "Calle 3", numero: 300, ciudad: "Springfield", provincia: "Buenos Aires", codigoPostal: "1900" }, 7.5),
];

const profesores = [
  new Profesor("Carlos", 35, "111222333", { calle: "Calle 4", numero: 400, ciudad: "Springfield", provincia: "Buenos Aires", codigoPostal: "1900" }, 10, 50000),
  new Profesor("Ana", 40, "444555666", { calle: "Calle 5", numero: 500, ciudad: "Springfield", provincia: "Buenos Aires", codigoPostal: "1900" }, 15, 60000),
];

const habitaciones = [
  new Taller(100, 6, true, "Aire Acondicionado", "Mecánica"),
  new Taller(80, 4, true, "Ventilador", "Electrónica"),
  new Aula(60, 8, true, "Aire Acondicionado", 30, 30, null),
  new Comedor(200, 10, false, "Ventilador", 100),
  new Oficina(30, 4, true, "Aire Acondicionado", true, true, "Dirección"),
  new Aula(50, 6, true, "Ventilador", 20, 20, null),
  new Aula(70, 8, true, "Aire Acondicionado", 25, 25, null),
];

const personal = [...profesores];

const materias = [
  new Materia("Programación", 5, profesores[0]),
  new Materia("Matemáticas", 4, profesores[1]),
];

const cursos = [
  new Curso("Tecnología", "Avanzado", materias, alumnos),
];

const tecnica = new Escuela("Escuela Técnica", direccionEscuela, personal, habitaciones, cursos);

console.log("=== ESCUELA ===");
console.log(tecnica);
console.log("\n=== ALUMNOS ===");
console.table(alumnos);
console.log("\n=== PROFESORES ===");
console.table(profesores);
console.log("\n=== HABITACIONES ===");
console.table(habitaciones);
console.log("\n=== MATERIAS ===");
console.table(materias);
console.log("\n=== CURSOS ===");
console.table(cursos);
