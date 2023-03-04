// ! Condicionales - Ternarios

const autenticado = true;

autenticado ? console.log('Usuario autentificado') : console.log('No autentificado, dirigir hacia login');

// ? Doble ternario
const saldo = 600;
const pagar = 500;
const tarjeta = false;

saldo > pagar ? 
console.log('Puedes pagar con Saldo') : 
tarjeta ? 
console.log('Puedes pagar con Tarjeta') : 
console.log('No, no puedes pagar');