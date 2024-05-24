function inverti_cifre(numero) {
    const numeroInvertito = parseInt(numero.toString().split('').reverse().join(''), 10);
    return numeroInvertito;
}

const numero = parseInt(prompt("Inserisci un numero intero da invertire:"));
const risultato = inverti_cifre(numero);
alert(`Il numero con le cifre invertite è: ${risultato}`);
