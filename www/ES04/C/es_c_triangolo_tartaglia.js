function generaTriangoloTartaglia(n) {
    const triangolo = [];

    for (let i = 0; i < n; i++) {
        triangolo[i] = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                triangolo[i][j] = 1;
            } else {
                triangolo[i][j] = triangolo[i - 1][j - 1] + triangolo[i - 1][j];
            }
        }
    }

    return triangolo;
}

function stampaTriangoloTartaglia(n) {
    const triangolo = generaTriangoloTartaglia(n);

    const maxLunghezzaNumero = Math.max(...triangolo[n - 1]).toString().length;
    const spaziPerNumero = maxLunghezzaNumero + 2;

    triangolo.forEach((riga, i) => {
        const spaziIniziali = " ".repeat((n - i - 1) * spaziPerNumero / 2);
        const rigaFormattata = riga.map(num => num.toString().padStart(spaziPerNumero - 1, " ")).join(" ");
        console.log(spaziIniziali + rigaFormattata);
    });
}

const numeroRighe = parseInt(prompt("Inserisci il numero di righe del triangolo di Tartaglia:"));
stampaTriangoloTartaglia(numeroRighe);
