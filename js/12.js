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