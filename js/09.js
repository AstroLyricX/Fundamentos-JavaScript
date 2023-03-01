// ! Operaciones en los arreglos

const tecnologias = ['CSS', 'HTML', 'JavaScript', 'React', 'Node.js'];

// ? Añadir elementos al array
// tecnologias.push('GraphQL'); // Push - Añade al final del array
// tecnologias.unshift('GraphQL'); // Unshift - Añade al inicio del array 

// const nuevoArreglo = [ ...tecnologias, 'GraphQL' ];
// const nuevoArreglo = [ 'GraphQL', ...tecnologias ];

// ? Eliminar elementos del array
// tecnologias.pop(); // Elimina del final
// tecnologias.shift(); // Elimina del inicio

// tecnologias.splice(2, 2); // Elimina de una posición en especifica

// const nuevoArreglo = [ ...tecnologias ].filter((tech) => tech !== 'JavaScript');

// ? Remplazar del array
// tecnologias[0] = 'GraphQL';

const nuevoArreglo = [ ...tecnologias ].map((tech) => {
    if (tech === 'HTML') {
        return 'GraphQl';
    } else {
        return tech;
    }
})


console.table(tecnologias);
console.table(nuevoArreglo);