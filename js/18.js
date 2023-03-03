// ! Comparación y Operador Estricto

const numero1 =  20;
const numero2 = '20';

/**
 * ? == (Comparación pero no es estricto)
 * ? === (Comparación estricta - Revisa valor y tipo de dato)
 */

// * Comparación pero no es estricto
if ( numero1 == numero2 ) {
    console.log('Si!, son iguales');
} else {
    console.log('No, son iguales');
}

// * Comparación estricta - Revisa valor y tipo de dato
if (numero1 === numero2) {
    console.log('Si, son iguales');
} else {
    console.log('No, son iguales');
}

const autentificado = true;

if ( autentificado ) {
    console.log('Si esta autenticado');
}

