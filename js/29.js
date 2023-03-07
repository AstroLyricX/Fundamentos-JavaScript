// ! Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments';

const consultarAPI = () => {
    fetch(url).then( (respuesta) => {
        // console.log(respuesta);
        return respuesta.json();
    })
    .then( (resultado) => {
        // console.log(resultado);
        resultado.forEach( comentario => {
            console.log(comentario);
        });
    })
}

consultarAPI();