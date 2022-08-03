/*15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro. 
*/

    const peliculas = [
        {titulo :'The Dark Knight', director: 'Chirtopher Nolan'},
        {titulo : 'Volver al futuro', director :'Robert Zemeckis'}
        ];
    
    const nuevoarray= (peliculas,string)=>peliculas.map(valor=>{ return `${string}: ${valor[string]} `});
    console.log(nuevoarray(peliculas,"titulo"))