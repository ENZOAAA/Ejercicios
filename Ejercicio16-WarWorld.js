/*Debés crear una función llamada `warWords` que reciba dos palabras como parámetro
y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).*/


const abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
function warWord(w1, w2) {
let uno = w1.split("").reduce((a, c) => (a += parseInt(abc[c])), 0);
let dos = w2.split("").reduce((a, c) => (a += parseInt(abc[c])), 0);
if (uno > dos)
{return `texto: ${w1} - Ganadora: ${uno} > ${dos}`}
else {
return `texto: ${w2} - Ganadora: ${dos} + > + ${uno}`}
}

console.log(warWord("holapianola", "teoria"));