// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var array = [];
var somma = 0;
var numero;

while (somma < 50) {
  numero = parseInt(prompt('Inserisci numero'));
  array.push(numero);
  somma += numero;
  console.log(somma);
}
console.log(array);