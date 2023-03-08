// ! Template Strings

const producto = 'Tablet 12 pulgadas';
const precio = 500;
const marca = 'Orange';

const textoDeFuncion = () => {
    return 'Este texto proviene de la función'
}


console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`);