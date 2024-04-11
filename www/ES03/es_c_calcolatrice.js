let num1 = prompt("inserisci un numero:");
let num2 = prompt("inserisci il secondo numero:");
let operazione = prompt("inserisci un operazione matematica tra '+', '-'. '*', '/', '**'");

if(!Number.isNaN(num1)&&!Number.isNaN(num2)){
    let risultato;
    switch(operazione){
        case '+':
            risultato=1*num1+num2*1;
            break;
        case '-':
            risultato=num1-num2;
            break;
        case '*':
            risultato=num1*num2;
            break;
        case '/':
            if(num2 !== 0){
                risultato=num1/num2;
            } else{
                console.log("!ATTENZIONE! la divisione per 0 non si puo fare");
                break;
            }
            break;
        case '**':
            risultato= Math.pow(num1,num2);
            break;
        default:
            console.log("!ATTENZIONE! Operazione non valida");
            break;
    }
        console.log("il risultato e: " + risultato);

} else{
    console.log("!ATTENZIONE! inserire dei numeri validi!");
}