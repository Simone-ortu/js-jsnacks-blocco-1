// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati= ['Pippo', 'Paperino', 'Pluto'];

var verifica = prompt('Inserire il proprio nome');

// if (invitati.includes(verifica)){
//     alert('sei un invitato, puoi pertecipare alla festa');
// }
// else{
//     alert('non sei in lista, non puoi partecipare')
// };

for( var i = 0; i < invitati.length; i++){
 if ( verifica == invitati[i]){
     alert('sei un invitato, puoi pertecipare alla festa');
 }
 else{
     alert('non sei in lista, non puoi partecipare');
 };
};