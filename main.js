window.onload = () => {
    let inputFullName = document.getElementById('fullName');
    inputFullName.onkeydown = (event) => {
        let number = parseInt(event.key);
        if (number) {
            event.preventDefault();
        }
    }
    let inputUserName = document.getElementById('username');
    inputUserName.onkeydown = (event) => {
        if (event.key === ',' || event.key === '.') {
            event.preventDefault();
        }
    }
    let inputCheckbox = document.getElementById('checkbox');
    inputCheckbox.onchange = () => {
        if (inputCheckbox.checked) {
            console.log("согласен");
        } else {
            console.log("не согласен")
        }
    }

    let popupButton = document.querySelector('.popup-btn');
    let password = document.getElementById('password');
    let passwordRepeat = document.getElementById('password-2');
    let email = document.getElementById('email');
    const form = document.querySelector('form');
    const popup =document.getElementById('popup');


    function checkInput(event) {
        if (!inputFullName.value.trim()) {
            alert("Заполните полное имя!");
            return false;
        }
        if (!inputUserName.value.trim()) {
            alert("Заполните имя пользователя!");
            return false;
        }
        if (!email.value) {
            alert("Заполните e-mail!");
            return false;
        }
        if (!password.value || !passwordRepeat.value) {
            alert("Введите пароль!")
            return false;
        }
        if (password.value.length < 8 || passwordRepeat.value.length < 8) {
            alert("Пароль должен содержать не менее 8 символов");
            return false;
        }
        if (password.value !== passwordRepeat.value) {
            alert("Пароли должны совпадать!");
            return false;
        }
        if (!inputCheckbox.checked) {
            alert("Необходимо принять условия");
            return false;
        }
        return true;
    }


    function submitForm (event) {
        event.preventDefault()
        if (checkInput())  {
            console.log ("форма заполнена");
            popup.classList.add('open');
            form.reset();
        }
    }

    form.addEventListener('submit', submitForm);


    let title = document.querySelector('.container-left__title');
    let formBtn = document.querySelector('#button');
    let link = document.querySelector('a');
    let lablesInput = document.querySelectorAll('label');

    function removeLabels() {
        lablesInput.forEach(label => {
            const forAttribute = label.getAttribute('for');
            if (forAttribute !== "userName" && forAttribute !== "password") {
                label.remove();
            }
        });
    }

    function clickAction () {
        if(title){
            title.textContent = "Log in to the system";
        }
        if (inputFullName) {
            inputFullName.remove();
        }
        if (email) {
            email.remove();
        }
        if (passwordRepeat) {
            passwordRepeat.remove();
        }
       if (inputCheckbox) {
           inputCheckbox.remove();
       }
        if (formBtn) {
            formBtn.textContent = "Sign In";
        }
        if (link) {
            link.remove();
        }
        removeLabels();
        newCheckButton ();
    }

    link.addEventListener('click', () => {
        clickAction();
    })
    popupButton.addEventListener('click', () => {
        popup.classList.remove('open');
        clickAction();
    })

    function newCheckInput () {
        if (!inputUserName.value.trim()) {
            alert("Заполните имя пользователя!");
            return false;
    }
        if (password.length < 8) {
            alert("пароль должен содержать не менее 8 символов!")
            return false;
        }
        return true;
    }



function newCheckButton () {
    if (formBtn.textContent === "Sign In") {
        form.removeEventListener('submit', submitForm);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (newCheckInput()) {
                alert (`Добро пожаловать, ${inputUserName.value}`);
            }
        });

    }

}








}