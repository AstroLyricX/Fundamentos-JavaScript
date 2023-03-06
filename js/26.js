// ! Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    if ( nombre === '' || password === '' ) {
        console.log('Todo los campos son obligatorios');
    } else {
        console.log('Todo bien, enviando...');
    }
});