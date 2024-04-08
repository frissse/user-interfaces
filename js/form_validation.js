"use strict"
window.addEventListener("load", init);

function init() {
    const form = document.querySelector("#personalisering");
    form.addEventListener("submit", formSubmit);

    const naamVeld = document.querySelector("#naam");
    naamVeld.addEventListener("blur", validateNaam);

    const emailVeld = document.querySelector("#email");
    emailVeld.addEventListener("keyup", validateEmail);
}

function validateNaam() {
    let inhoud = document.getElementById("naam").value;
    let tag = document.getElementById("naam");
    let feedback = document.getElementById("error_naam");

    if (inhoud.length > 0) {
        if (inhoud.startsWith(" ")) {
            feedback.innerHTML = "geen spaties toegelaten";
            tag.classList.remove('validinput');
            return false;
        }

        if (inhoud.endsWith(" ")) {
            feedback.innerHTML = "geen spaties toegelaten";
            tag.classList.remove('validinput');
            return false;

        } else {
            feedback.innerHTML = ""
            tag.classList.add('validinput');
            return true;
        }
    } else {
        return false;
    }


}

function validateEmail() {
    let inhoud = document.getElementById("email").value;
    let tag = document.getElementById("email");
    let feedback = document.getElementById("error_email");
    let email = inhoud.split('@');


    if (!email[0].match(/([a-zA-Z]*\.[a-zA-Z]*)/)) {
        feedback.innerHTML = "email niet correct, verwachte syntax: voornaam.achternaam@kdg.be of student.kdg.be";
        tag.classList.remove('validinput');
        return false;
    }
    if (!email[1].match(/kdg\.be|student\.kdg\.be/)) {
        feedback.innerHTML = "email niet correct, verwachte syntax: voornaam.achternaam@kdg.be of student.kdg.be";
        tag.classList.remove('validinput');
        return false;
    }

    if (inhoud.match(/^\./)) {
        feedback.innerHTML = "geen punt aan begin van email toegelaten";
        tag.classList.remove('validinput');
        return false;
    }
    if (inhoud.match(/\.$/)) {
        feedback.innerHTML = "geen punt aan einde van email toegelaten";
        tag.classList.remove('validinput');
        return false;
    }

    if (email[0].match(/\.{2,}/)) {
        feedback.innerHTML = "email niet correct, verwachte syntax: voornaam.achternaam@kdg.be of student.kdg.be";
        tag.classList.remove('validinput');
        return false;
    }
    else {
        feedback.innerHTML = "";
        tag.classList.add('validinput');
        return true;
    }
}

function formSubmit(event) {
    let feedback = document.getElementById("error");
    if (validateNaam() && validateEmail()) {
        feedback.innerHTML = "";
    } else {
        feedback.innerHTML = "niet alle velden zijn correct ingevuld"
        event.preventDefault();
    }
    const product = document.getElementById("product");
    localStorage.setItem("product", product.value)
}