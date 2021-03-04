// Lista di cognomi
var listaCognomi =["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]
// Input per il cognome dell'user
var cognomeUtente = prompt("Inserisci il tuo cognome");
// Aggiunsta del cognome dell'user nella lista dei cognomi
listaCognomi.push(cognomeUtente);
// Riordino dei cognomi in ordine alfabetico
listaCognomi.sort();
// Stampa della lista
console.log(listaCognomi);
