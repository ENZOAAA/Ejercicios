//Creamos un Set apartir de un Array:
const familia= [ 'Enzo','Lucia','Naza', 'Fio','Abue'];
const miSet = new Set (familia);
console.log(miSet);

//Modificamos el Set añadiendo tu nombre(duplicado):
miSet.add('Enzo');
console.log(miSet) //queda igual ya que en los set no se duplica un Valor.

//Modifica el set original añadiendo el nombre JavaScript:
miSet.add('JavaScript');
console.log(miSet);