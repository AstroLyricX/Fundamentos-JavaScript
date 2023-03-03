// ! Array Methods útiles

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Rect', 'Node.js'];
const numeros = [10, 20, 30];


// ? Includes - Comprobar si un elemento existe en el array
const resultado =  tecnologias.includes('HTML');
console.log(resultado);

// ? Some - Develve si al menos uno cumple la condición
const resultado2 = numeros.some( numero => numero > 16 );
console.log(resultado2);

// ? Find - Devuelve el primer elemento que cumple la condicón
const resultado3 = numeros.find( numero => numero > 9 );
console.log(resultado3);

// ? Every - Retorna true o false si todos cumplen la condición
const resultado4 = numeros.every( numero => numero > 18 );
console.log(resultado4);

// ? Reduce - Acumulando en el total
const resultado5 = numeros.reduce(( total, numero ) => numero + total, 0);
console.log(resultado5);

// ? Filter - Crea un nuevo array en base a una condicón
const resultado6 =  tecnologias.filter( tech => tech === 'Node.js');
console.log(resultado6);
const resultado7 =  numeros.filter( numero => numero > 15 );
console.log(resultado7);

// ? ForEach - Acceder a cada elemento del Array
tecnologias.forEach( (tech, index) => console.log(index, tech));

// ? Crea un nuevo Array
const ArrayMap = tecnologias.map( tech => tech );
console.table(ArrayMap);
