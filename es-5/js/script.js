// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.


// Variabili
var parola1 = prompt('inserire prima parola');
var parola2 = prompt('inserire seconda parola');

// Algoritmo
if (parola1.length > parola2.length){
    console.log(parola2);
    console.log(parola1);
} else if (parola2.length > parola1.length){
    console.log(parola1);
    console.log(parola2);
} else {
    console.log(parola1 + ' '+ parola2);
}
