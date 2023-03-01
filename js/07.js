// ! Unir 2 objetos o más

const producto = {
    nombre: 'Tablet',
    precio: 100,
    disponible: true
}

const cliente = {
    nombre: 'Ever',
    premiun: true
}

// const nuevoObjeto = Object.assign(producto, cliente); // No
// console.table(nuevoObjeto);

const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.table(nuevoObjeto2);
console.log(producto);
console.log(cliente);

// ? Spread Operator
const nuevoObjeto3 = { ... producto };
nuevoObjeto3.imagen = 'imagen.jpg';
console.table(nuevoObjeto3);