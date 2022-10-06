/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//Definizione variabili 
let km = 0;
let eta = 0;
const euro_1Km = 0.21;
let price = 0;

//Assegnazioni variabili
km = parseFloat(prompt('Quanti chilometri vuoi percorrere? (Usa il punto per i numeri non interi)'))
eta = parseInt(prompt('Quanti anni hai?'))

if (isNaN(km) || isNaN(eta)){
    alert('Dati errati, ricarica la pagina e inserisci solo numeri senza spazi o altri caratteri')
}else{
    price = euro_1Km * km;
    if (eta < 18){
        price = price * 0.8;
    } else if (eta > 65){
        price = price * 0.6;
    }
    price = price.toFixed(2);
    document.getElementById('my-price').innerHTML = price + ' &euro;';
}

