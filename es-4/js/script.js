// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore

// stabilire variabili
var n1 = parseInt(prompt('inserire primo numero'));
var n2 = parseInt(prompt('inserire secondo numero'));
// algoritmo
if (n1 > n2){
    alert('Il primo numero inserito é maggiore');
}
else if(n2 > n1){
   alert('Il secondo numero é maggiore');
}
else{
    alert('I numeri inseriti sono pari')
}

