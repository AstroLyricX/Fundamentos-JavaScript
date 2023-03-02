// ! Arrow Function y Array Methods

const tecnologias = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ];

const nuevoArray = tecnologias.map((tech) => {
    if (tech === 'CSS') {
        return 'GraphQL';
    } else {
        return tech;
    }
});
console.log(nuevoArray);


const nuevoArray2 = tecnologias.filter( tech => tech === 'Node.js' );
console.log(nuevoArray2);