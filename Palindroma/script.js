const parolaUtente = prompt(`Inserisci una parola`)
console.log(parolaUtente);
if (palindromo(parolaUtente)) {
    console.log(`La parola e palindroma!`);
} else {
    console.log(`La parola non e palindroma!`);
}


function palindromo(nomeDaVerificare) {
    let splitWord = nomeDaVerificare.split(``)
    let reverseWord = splitWord.reverse(``)
    let joinWord = reverseWord.join(``)

    if (joinWord === nomeDaVerificare) {
        return true
    } else {
        return false
    }
}