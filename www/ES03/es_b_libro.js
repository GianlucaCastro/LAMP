let libro = {
    titolo: "Il codice da Vinci",
    autore: "Dan Brown",
    anno_di_publicazione: 2003,
    genere: "Thriller",
    num_pagine: 592
}

for(let key in libro){
    console.log(key + ":" + libro[key]);
}