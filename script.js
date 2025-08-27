//definisci una costante con il costo in base ai kilometri
const kmPrice = 0.21;
//chiedi all'utente le informazioni necessarie e salvale in variabili
let kmTrip = prompt("Quanti kilometri devi percorrere?");
let age = prompt("Quanti anni hai?");

tempPrice = kmTrip * kmPrice;
console.log(tempPrice);

//verifica se l'età permette di accedere a uno sconto (<18 o >65) e rimanda a schermo il prezzo finale
let finalPrice;

if (age < 18) {
    finalPrice = tempPrice * 0.8;
}
else if(age > 65) {
    finalPrice = tempPrice * 0.6;
}
else {
    finalPrice = tempPrice;
}

let formatResult = finalPrice.toFixed(2);
console.log("il costo è di €" + formatResult)
