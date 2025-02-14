// Seleziona il pulsante e il paragrafo nascosto
const bottone = document.getElementById("mioBottone");
const messaggio = document.getElementById("messaggio");

// Aggiunge un evento di click al pulsante
bottone.addEventListener("click", function() {
    // Mostra il messaggio segreto
    messaggio.style.display = "block";
});
// Seleziona tutti i pulsanti presenti e assenti
const listaGiocatori = document.querySelectorAll("#listaGiocatori li");

listaGiocatori.forEach((giocatore, index) => {
    const presenteBtn = giocatore.querySelector(".presente");
    const assenteBtn = giocatore.querySelector(".assente");

    // Controlla se lo stato è già salvato nel browser
    const statoSalvato = localStorage.getItem(`giocatore${index}`);
    if (statoSalvato === "presente") {
        giocatore.style.backgroundColor = "lightgreen";
    } else if (statoSalvato === "assente") {
        giocatore.style.backgroundColor = "pink";
    }

    // Quando cliccano su "Presente"
    presenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "lightgreen"; // Cambia colore
        localStorage.setItem(`giocatore${index}`, "presente"); // Salva stato
    });

    // Quando cliccano su "Assente"
    assenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "pink"; // Cambia colore
        localStorage.setItem(`giocatore${index}`, "assente"); // Salva stato
    });
});
// Seleziona tutti i pulsanti presenti e assenti
const listaGiocatori = document.querySelectorAll("#listaGiocatori li");

// Seleziona tutti i giocatori nella lista
const listaGiocatori = document.querySelectorAll("#listaGiocatori li");

listaGiocatori.forEach((giocatore, index) => {
    const presenteBtn = giocatore.querySelector(".presente");
    const assenteBtn = giocatore.querySelector(".assente");

    // Controlla se lo stato è già salvato nel browser
    const statoSalvato = localStorage.getItem(`giocatore${index}`);

    // Imposta il colore salvato
    if (statoSalvato === "presente") {
        giocatore.style.backgroundColor = "lightgreen";
    } else if (statoSalvato === "assente") {
        giocatore.style.backgroundColor = "lightcoral";
    }

    // Quando cliccano su "Presente"
    presenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "lightgreen"; // Cambia colore a verde
        localStorage.setItem(`giocatore${index}`, "presente"); // Salva stato
    });

    // Quando cliccano su "Assente"
    assenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "lightcoral"; // Cambia colore a rosso
        localStorage.setItem(`giocatore${index}`, "assente"); // Salva stato
    });
});
// Seleziona tutti i giocatori nella lista
const listaGiocatori = document.querySelectorAll("#listaGiocatori li");
const contaPresenti = document.getElementById("contaPresenti");
const contaAssenti = document.getElementById("contaAssenti");
const resetButton = document.getElementById("resetButton");

// Funzione per aggiornare il contatore di presenti e assenti
function aggiornaContatore() {
    let presenti = 0;
    let assenti = 0;

    listaGiocatori.forEach((giocatore, index) => {
        const stato = localStorage.getItem(`giocatore${index}`);
        if (stato === "presente") {
            presenti++;
        } else if (stato === "assente") {
            assenti++;
        }
    });

    contaPresenti.textContent = presenti;
    contaAssenti.textContent = assenti;
}

// Funzione per aggiornare lo stato dei giocatori
listaGiocatori.forEach((giocatore, index) => {
    const presenteBtn = giocatore.querySelector(".presente");
    const assenteBtn = giocatore.querySelector(".assente");

    // Controlla se lo stato è già salvato nel browser
    const statoSalvato = localStorage.getItem(`giocatore${index}`);

    if (statoSalvato === "presente") {
        giocatore.style.backgroundColor = "lightgreen";
    } else if (statoSalvato === "assente") {
        giocatore.style.backgroundColor = "lightcoral";
    }

    // Quando cliccano su "Presente"
    presenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "lightgreen"; // Cambia colore a verde
        localStorage.setItem(`giocatore${index}`, "presente"); // Salva stato
        aggiornaContatore();
    });

    // Quando cliccano su "Assente"
    assenteBtn.addEventListener("click", () => {
        giocatore.style.backgroundColor = "lightcoral"; // Cambia colore a rosso
        localStorage.setItem(`giocatore${index}`, "assente"); // Salva stato
        aggiornaContatore();
    });
});

// Aggiungiamo il pulsante "Reset"
resetButton.addEventListener("click", () => {
    listaGiocatori.forEach((giocatore, index) => {
        giocatore.style.backgroundColor = "#f9f9f9"; // Resetta il colore
        localStorage.removeItem(`giocatore${index}`); // Cancella i dati salvati
    });

    aggiornaContatore(); // Aggiorna i contatori
});

// Aggiorna i contatori all'avvio
aggiornaContatore();
