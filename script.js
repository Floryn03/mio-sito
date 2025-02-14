// Seleziona il pulsante e il paragrafo nascosto
const bottone = document.getElementById("mioBottone");
const messaggio = document.getElementById("messaggio");

// Aggiunge un evento di click al pulsante
bottone.addEventListener("click", function() {
    // Mostra il messaggio segreto
    messaggio.style.display = "block";
});
