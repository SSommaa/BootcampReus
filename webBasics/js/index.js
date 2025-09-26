/* Ejercicio 01 */

let numero = 42;
let texto = "Hola mundo";
let booleano = true;
let indefinido;
let nulo = null;
let objeto = { nombre: "Mati" };
let arreglo = [1, 2, 3];

console.log("numero:", numero);
console.log("texto:", texto);
console.log("booleano:", booleano);
console.log("indefinido:", indefinido);
console.log("nulo:", nulo);
console.log("objeto:", objeto);
console.log("arreglo:", arreglo);

console.log("Tipo de 'numero':", typeof numero);
console.log("Tipo de 'texto':", typeof texto);
console.log("Tipo de 'booleano':", typeof booleano);
console.log("Tipo de 'indefinido':", typeof indefinido);
console.log("Tipo de 'nulo':", typeof nulo);
console.log("Tipo de 'objeto':", typeof objeto);
console.log("Tipo de 'arreglo':", typeof arreglo);

var globalVar = "Soy global";
function ejemploScope() {
  let localVar = "Soy local";
  console.log(localVar);
}
console.log(globalVar);
ejemploScope();

/* Ejercicio 02 */
const nombres = () => {
  const nombre = "Carlos Bausa";
  return nombre;
};
const nombreCompleto = nombres();
console.log("Nombre completo:", nombreCompleto);

const esVerdadero = false;
const datoBooleano = (esVerdadero) => {
  esVerdadero = !esVerdadero;
  return esVerdadero;
};
function mostrarParametros(...params) {
  params.forEach((param) => {
    console.log(param);
  });
}

mostrarParametros(1, 2, 3, 4, 5);

/* Ejercicio 03 */
const numeros = Math.round(Math.random());
console.log("Número aleatorio:", numeros);
const caracruz = () => {
  return numeros === 1 ? "Cara" : "Cruz";
};

console.log("Resultado del lanzamiento:", caracruz());

/* Ejercicio 04 */
const suma = (a, b, c) => {
  return a + b + c;
};
console.log("Suma:", suma(4, 2, 8));

function mostrarNombreCompleto(nombre, apellido1, apellido2) {
  const nombreCompleto = `${nombre} ${apellido1} ${apellido2}`;
  console.log("Nombre completo:", nombreCompleto);
}
mostrarNombreCompleto("Carlos", "Bausa", "Segura");

function mayor(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log("El número mayor es:", mayor(10, 25));

/* Ejercicio 05 */
function mostrarMes(numeroMes) {
  let mes;
  switch (numeroMes) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Mayo";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    case 12:
      mes = "Diciembre";
      break;
    default:
      mes = "Mes inválido";
  }
  return mes;
}
console.log(mostrarMes(4));

function stringANumero(str) {
  let num;
  switch (str) {
    case "uno":
      num = 1;
      break;
    case "dos":
      num = 2;
      break;
    case "tres":
      num = 3;
      break;
    case "cuatro":
      num = 4;
      break;
    case "cinco":
      num = 5;
      break;
    default:
      num = "Valor inválido";
  }
  return num;
}
console.log(stringANumero("tres"));

/* Ejercicio 06 */

for (let i = 1; i <= 10; i++) {
  console.log("I love coding ♥");
}
const auxiliar = 0;
while (auxiliar <= 10) {
  console.log("I love coding");
  console.log("Hi");
  auxiliar = auxiliar + 1;
}
