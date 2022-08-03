/*18. {value: key} kelue: vay
Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
*/
const alumno={
    nombre: "ENZOA",
    edad: 33,
    curso: "JavaScript",
    };
    
    
    
    function reverseKeys (obj){
    switch (true) {
        case Array.isArray(obj):
            return `error, input can't be an Array. `
            break;
        case typeof obj==="number":
            return `error, input can't be a number. `
            break;
        case typeof obj==="string":
            return `error, unput can't be an String. ` 
            break;
        case  obj === alumno:
            return alumno;
            break;
        case typeof obj ===`object`:
        return `${obj} el objeto no esta definido.`
            break;
        default:
        return `Ingresar...`
    }}
    console.log(reverseKeys())