const btn = document.querySelector('#btnChangeCardData');

btn.addEventListener('click', () => {
    // leggo input utente
    let inputNumber = document.querySelector('#number');
    let inputUser = document.querySelector('#user');

    // controlli sui dati inseriti
    if(inputNumber.value == '' || inputUser.value == '') {
        alert('Attenzione! Sono stati inseriti dati non validi.');
        return;
    }
    if(inputNumber.value.length != 16) {
        alert('Attenzione! Controllare il numero della carta.');
        return;
    }

    let numers = document.querySelectorAll('.card-number');
    let users = document.querySelectorAll('.card-user');

    numers.forEach(number => {
        let formattedCardNumber = formatCardNumber(inputNumber.value);
        number.innerText = formattedCardNumber;
    });
    users.forEach(user => {
        user.innerText = inputUser.value;
    });

    let fieldsToEmpty = [inputNumber, inputUser];
    emptyInput(fieldsToEmpty);
});


function emptyInput(fieldsArray) {
    fieldsArray.forEach(field => {
        field.value = '';
    });
}

function formatCardNumber(cardNumberToFormat) {
    let result = '';

    // 1111222233334444
    let one = cardNumberToFormat.slice(0,4);
    let two = cardNumberToFormat.slice(4,8);
    let three = cardNumberToFormat.slice(8,12);
    let four = cardNumberToFormat.slice(12,16);

    result = `${one} ${two} ${three} ${four}`;
    return result;
}