// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array 


var dispari=[];


for (var i=0; i<6 ;i++){
   var numeri = prompt('inserisci numero');
    if (numeri %2 != 0){
        dispari.push(numeri);
    };
    

};
console.log(dispari);