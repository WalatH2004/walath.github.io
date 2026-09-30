const form = document.querySelector("#contact-form");

const velden = [
    {
        id: "naam",
        boodschap: "Vul minimaal 2 tekens in x",
        correct: "Naam staat goed ✓"
    },
    {
        id: "email",
        boodschap: "Vul een geldig emailadres in x",
        correct: "E-mail is herkend ✓"
    },
    {
        id: "bericht",
        boodschap: "Schrijf minimaal 10 tekens x",
        correct: "Correct aantal tekens ✓"
    }
];

function valideerVeld(veld){

    const naamInput = document.querySelector(`#${veld.id}`);
    const naamError = document.querySelector(`#${veld.id}-error`);

    const geldig = naamInput.checkValidity();

    naamInput.setAttribute("aria-invalid", String(!geldig));

    if (geldig){
        naamError.textContent = veld.correct;
        naamError.classList.remove("error");
        naamError.classList.add("correct");
    } else {
        naamError.textContent = veld.boodschap;
        naamError.classList.remove("correct");
        naamError.classList.add("error");
    }

    return geldig;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const alleGeldig = velden.map(valideerVeld).every(Boolean);

    const status = document.querySelector("#form-status");

    if (!alleGeldig){
        status.textContent = "Er zijn nog fouten in het formulier!";
        status.classList.remove("success");
        status.classList.add("error");
        return;
    } else {
        status.textContent = "Bericht verzonden! Bedankt.";

        velden.forEach((veld) => {
            const naamError = document.querySelector(`#${veld.id}-error`);

            naamError.textContent = "";
            naamError.classList.remove("error");
            naamError.classList.remove("correct");
        })

        status.classList.remove("error");
        status.classList.add("success");

        form.reset();
    }
});