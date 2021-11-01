const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputConsent = document.getElementById('consent');
const showName = document.getElementById('showName');
const button = document.getElementById('button');
const tyPage = document.getElementById('thank-you');
const form = document.getElementById('form');

function validateForm() {
    if(!inputName.value) {
        alert ('Uzupełnij pole z imieniem!');
        return false;
    } else if (!inputEmail.value) {
        alert ('Uzupełnij pole z adresem email!')
        return false;
    } else if (!inputConsent.checked) {
        alert ('Przeczytaj i zaakceptuj regulamin!');
        return false;
    }
    return true;
}

button.addEventListener('click', () => {
    if(validateForm()) {
        tyPage.style.display = 'flex';
        form.style.display = 'none';
        showName.innerText = inputName.value;
    }
});