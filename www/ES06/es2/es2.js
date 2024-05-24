// script.js
document.addEventListener('DOMContentLoaded', () => {
    const codiceFiscaleInput = document.getElementById('codice_fiscale');
    
    codiceFiscaleInput.addEventListener('input', () => {
        codiceFiscaleInput.value = codiceFiscaleInput.value.toUpperCase();
    });
});
