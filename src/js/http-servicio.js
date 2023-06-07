const jokeUrl = 'https://api.chucknorris.io/jokes/random';

//Practicas
// fetch( jokeUrl ).then( resp => {
//     resp.json().then( ({ id, value }) => {
//         console.log( id );
//         console.log( value );
//     });
// });

//Forma corta evita promise hell
// fetch( jokeUrl )
//     .then( resp => resp.json() )
//     .then( ({ id, value }) => {
//         console.log( id, value );
//     });

const obtenerChiste = async () => {

    try {

        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'No se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json();
    
        return { icon_url, id, value };
        
    } catch ( err ) {
        
        throw err;

    }
}




export {
    obtenerChiste
}