//Creamos Obj de datos personales:
const datos_personales={
    nombre: 'Enzo',
    apellido: 'Alarcon',
    edad: 33,
    altura: 1.83,
    eresDesarrollador: true,
    }
    

//Extraemos la edad en datos personales:
const edad= (datos_personales.edad);
console.log (edad);

//Nuevo objeto con datos de amigos :
const datos_Amigos= [
    {nombre: 'Tipo', apellido: 'Lobos', edad: 35, altura: 1.63, eresDesarrollador: false},
    {nombre: 'Manu', apellido: 'Reyes', edad: 34, altura: 1.65, eresDesarrollador: false}
    ];

    //Nueva lista con datos de ambos objetos:

    datos_Amigos.push(datos_personales); //Agregamos datos del primer objeto al segundo.

    const nuevaList = datos_Amigos; //Creamos nueva lista con los datos de ambos objetos.

    //Creamos una nueva lista ordenada apartir de la anterior:
    const listOrdenada = nuevaList.sort((a, b) => a.edad - b.edad);
    console.log(listOrdenada);


