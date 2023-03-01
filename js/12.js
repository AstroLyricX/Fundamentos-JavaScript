// ! Funciones - Function Declaration

function sumar() {
    console.log(3+5);
}

sumar();

function sumar2(numero = 0, numero2 = 0) {
    console.log(numero + numero2);
}

sumar2();
sumar2(10,20);
sumar2(100, 400);
sumar2(15);

function sumar3(numero = 0, numero2 = 0 ) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundo',
    }
}

const { resultado, mensaje } = sumar3(20, 30);
console.log(resultado);
console.log(mensaje);