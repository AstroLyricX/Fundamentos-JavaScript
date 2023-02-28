// ! Tipos de datos

// ? Undefined
let cliente;
console.log(cliente);
console.log(typeof cliente);

// ? Boolean
let descuento = true;
console.log(descuento);
console.log(typeof descuento);

// ? Number
let numero1 = 20.20;
let numero2 = 30;
let numero3 = -100;
console.log(typeof numero1, typeof numero2, typeof numero3);

// ? Strings o Cadenas de texto
let alumno = 'Ever';
console.log(typeof alumno);

// ? BigInt
const numeroGrande = BigInt(909098766576879889232234);
console.log(typeof numeroGrande);

const number1 = 30;
const number2 = '30';
console.log(number1 + Number(numeroGrande));
console.log(number2 + String(number1));

// ? Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf(), segundoSymbol.valueOf());

// ? Null
const discount = null;
console.log(typeof discount);