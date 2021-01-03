// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.



// Realizziamo le variabili
var cpu;
var user;
var i = 0;
var j = 0;

while (i < 4 && j < 4) {
    user = parseInt(prompt('inserisci 1 per sasso, 2 per forbici, 3 per carta'));
    cpu = generaRandom(1, 3);
    if ((user == 1 && cpu == 2) || (user == 2 && cpu == 3) || (user == 3 && cpu == 1)) {
      console.log('Vittoria user');
      i++;
    }
    else if ((cpu == 1 && user == 2) || (cpu == 2 && user == 3) || (cpu == 3 && user == 1)) {
      console.log('Vittoria cpu');
      j++;
    }
    else {
      console.log('Pareggio');
    }
    console.log('user ha vinto ',i, 'partite', 'cpu ha vinto ',j, 'partite');
  }
  if (i == 4) {
    console.log('BRAVO HAI VINTO!!!');
  }
  else {
    console.log('ha vinto la cpu');
  }





// Funzioni
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }