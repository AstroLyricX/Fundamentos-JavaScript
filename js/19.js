// ! Condicionales - Condición || y &&

/**
 * ? || - Al menos una debe cumplirse
 * ? && - Todas deben cumplirse
 */

const saldo = 600;
const pagar = 500;
const tarjeta = true;

if (saldo > pagar || tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No, no puedes pagar');
}