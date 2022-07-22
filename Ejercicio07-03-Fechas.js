//Fecha de hoy:
const fechaHoy = new Date();
console.log (fechaHoy)

//fecha de nacimiento:
const nacimiento = new Date(1988,11,21) ;
console.log(nacimiento);

//Indicamos si hoy es mas tarde que la fecha de nacimiento:
const comparar = (fechaHoy.getDate() > nacimiento.getDate());
console.log(comparar);
//Indicamos el dia del nacimiento:
const diaNacimiento = nacimiento.getDay()+1;
console.log(diaNacimiento.toLocaleString("en-US"));

//Indicamos el mes de nacimiento:
const MesNacimiento = nacimiento.get.Month()+1;
console.log(MesNacimiento.toLocaleString("en-US"));

//Indicamos solo el año del nacimiento:
const añoN= nacimiento.getFullYear();
console.log(añoN.toLocaleString("en-US"));