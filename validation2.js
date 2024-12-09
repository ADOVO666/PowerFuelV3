

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("Форма не отправляется, проверяем валидацию");

    let isValid = true;
    const orderEmail = document.getElementById("orderEmail").value;
    const orderAddress = document.getElementById("orderAddress").value;
    const orderFlavor = document.getElementById("orderFlavor").value;

    resetErrors(); 

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!orderEmail || !emailRegex.test(orderEmail)) {
        showError("orderEmailError", "Введите корректный адрес электронной почты. Пример: EmailName@domen.code");
        document.getElementById("orderEmail").classList.add("invalid");
        isValid = false;
    }


    const addressRegex = /^[А-ЯЁ][а-яё]+ \d{1,3} [А-ЯЁ][а-яё]+ \d{1,3} [А-ЯЁ][а-яё]+(, \d{1,4})?$/;
    if (!orderAddress || !addressRegex.test(orderAddress)) {
        showError("orderAddressError", "Введите корректный адрес в формате: Г. Город Ул. Улица Д. Дом, Кв. Квартира.");
        document.getElementById("orderAddress").classList.add("invalid");
        isValid = false;
    }

    if (!orderFlavor) {
        showError("orderFlavorError", "Пожалуйста, выберите вкус.");
        document.getElementById("orderFlavor").classList.add("invalid");
        isValid = false;
    }

    if (isValid) {
        alert("Ваш заказ успешно оформлен!");
        window.location.href = "index.html";  
    } else {
        console.log("Форма содержит ошибки");
    }
});

function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => errorMessage.textContent = "");
    const inputs = document.querySelectorAll('.invalid');
    inputs.forEach((input) => input.classList.remove('invalid'));
}


function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error-message');
}
