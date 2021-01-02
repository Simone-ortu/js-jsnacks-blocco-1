// 1. Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

// inizio creando la variabile random da 1 a 100
var numRndm = Math.floor(Math.random() * 100) + 1;
console.log(numRndm);
var inputNum;
var flag;
var difficolta = parseInt(prompt('Inserisci 1 per difficolta bassa, inserisci 2 per difficolta media, inserisci 3 per difficolta alta'));
// scelta difficoltà
switch (difficolta) {
    case 1:
        console.log('difficoltà bassa');
        flag = chooseNum(16);
        break;
    case 2:
        console.log('difficoltà media');
        flag = chooseNum(8);
        break;
    case 3:
        console.log('difficoltà alta');
        flag = chooseNum(4);
        break;
    default:
        alert('Devi inserire 1,2 o 3 per la difficoltà');
}
// creo la funzione per i creare i cicli dei tentativi
function chooseNum(times) {
    var sentinella = false;
    var i = 0;
    while (i < times && sentinella == false) {
        inputNum = parseInt(prompt('inserire un numero'))
        console.log(times - i, 'tentativi rimanenti');
        if (inputNum < numRndm) {
            console.log('il numero da indovianre è più alto');
        }
        else if (inputNum > numRndm) {
            console.log('il numero da indovianre è più basso');
        }
        else {
            sentinella = true;
        }
        i++;
    }
    return sentinella;
}
        


