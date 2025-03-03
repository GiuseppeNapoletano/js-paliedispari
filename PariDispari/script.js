const pariDispariUtente = prompt(`Scegli e scrivi: pari o dispari?`);
console.log(pariDispariUtente);
const numeroUtenteStr = Number(prompt(`Scrivi un numero da 1 a 6`))
const numeroUtente = parseInt(numeroUtenteStr)
console.log(numeroUtente);
const numeroCasuale = getRndInteger(1, 6)
console.log(numeroCasuale);
const sommaNumeri = numeroUtente + numeroCasuale
console.log(sommaNumeri);
const finale = pari_dispari(sommaNumeri)
console.log(finale);
let messaggio
if (isNaN(numeroUtente) === true || (pariDispariUtente != `pari` && pariDispariUtente != `dispari`)) {
    messaggio = `Valori inseriti errati! Ricarica la pagina!`
}
else if (pariDispariUtente === finale) {
    messaggio = `Congratulazione! Hai indovinato!`
} else {
    messaggio = `Ritenta! Sarai piu fortunato!`
}
console.log(messaggio);







function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function pari_dispari(numeroDaVerificare) {
    let risultato;
    if (numeroDaVerificare % 2 === 0) {
        risultato = `pari`
    } else {
        risultato = `dispari`
    }
    return risultato
  }
  
  