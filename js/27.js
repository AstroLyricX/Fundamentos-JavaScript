// ! Generando código HTML con JS

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    const alertaPrevia = document.querySelector('.alerta');
    if ( alertaPrevia ) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta');

    if ( nombre === '' || password === '' ) {
        alerta.textContent = 'Todo los campos son obligatorios';
        alerta.classList.add('error');
    } else {
        alerta.textContent = 'Todo bien, enviando...';
        alerta.classList.add('exito');
    }

    formulario.appendChild(alerta);
});
