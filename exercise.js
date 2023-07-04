/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}
const sum = crazySum(25, 25);
const crazyDifference = sum * 3;
console.log(sum);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num) {
  return (num >= 20 && num <= 100) || num === 400;
}
console.log(boundary(50));
console.log(boundary(400));
console.log(boundary(10));
console.log(boundary(200));

// /* ESERCIZIO 3
//  Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// // ciclo for con i--( decrescente )
// // .lenght -1
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("Kawasaki"));

// .split -- fa diventare una stringa un array.
// .reverse -- gira
// .join -- unisce
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("cipolla"));

// /* ESERCIZIO 4
//  Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(up){
  let maiuscolo = "";
  for (let i = 0; i < maiuscolo.length; i++){
  }
  return up.toUpperCase();
}
console.log(upperFirst("maiuscolo,minuscolo"));

// /* ESERCIZIO 5
//  Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let random = [];
  for (let i = 0; i < n; i++) {
    random.push(Math.floor(Math.random() * 11));
  }
  return random;
}

console.log(giveMeRandom(3));

// //EXTRA:
// /* ESERCIZIO 1
//  Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}
console.log(area);

// /* ESERCIZIO 2
//  Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
//  Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x,y){
  if (y > x) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}
const sumOne = crazyDiff(-31,19)
console.log(sumOne);



// /* ESERCIZIO 3
//  Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
//  La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
function codify(string){
  if (string.startsWith("code")){
    return string;
  } else {
    return "code" + string
  } 
}

// /* ESERCIZIO 4
//  Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
//  La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
//  SUGGERIMENTO: operatore modulo
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(){
  if (number % 3 === 0 || number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}


// /* ESERCIZIO 5
//  Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(stringCut) {
//   if 

// }
// let stringCut = "stringa"