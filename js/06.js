// ! Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: 'Tablet',
    precio: 100,
    disponible: true
}

const cliente = {
    nombre: 'Ever',
    premiun: true
}

const { nombre, precio, disponible } = producto;
const { nombre: nombreCliente, premiun } = cliente;

console.log(nombre);
console.log(nombreCliente);