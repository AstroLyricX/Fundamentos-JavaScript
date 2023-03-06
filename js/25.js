// ! Eventos del DOM - inputs

const inputNombre = document.querySelector('.nombre');

inputNombre.addEventListener('input', (event) => {
    console.log(event.target.value);
});

const inputPassword = document.querySelector('.password');

inputPassword.addEventListener('input', () => {
    inputPassword.type = 'text';
    setTimeout(() => {
        inputPassword.type = 'password';
    }, 200);
});