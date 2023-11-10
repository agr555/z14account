window.onload = function (e) {
    //валидация
    let inputFullname = document.getElementById('form-fullname');
    inputFullname.onkeydown = (e) => {
        if (!isNaN(parseInt(e.key))) {
            console.log("invalid symbol " + e.key);
            return false;
        }
    };
    let inputUsername = document.getElementById('form-username');
    inputUsername.onkeydown = (e) => {
        if (e.key == '.' || (e.key == ',')) {
            console.log("invalid symbol " + e.key);
            return false;
        }
    };

    const checkbox = document.getElementById('form_choice');
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    });
    let TextFormSign = document.getElementById('form-sign-btn');
    let inputFormPassword = document.getElementById('form-password');
    // console.log(TextFormSign"+);
    console.log(TextFormSign.innerHTML);
    let inputFormEmail = document.getElementById('form-email');
    let inputFormRepeatPswd = document.getElementById('form-repeat-pswd');

    const signButton = document.getElementById('form-sign-btn');
    const signLink = document.getElementById('userHaveAccount');

    signButton.onclick = onRegister;
    signLink.onclick = goToLoginPage;
    function onRegister() {
        //валидация

        if (!inputFullname.value) {
            alert('Заполните поле Full name');
            return;
        }
        if (!inputUsername.value) {
            alert('Заполните поле username');
            return;
        }
        if (!inputFormEmail.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if (!inputFormPassword.value) {
            alert('Заполните поле password');
            return;
        }
        if (!inputFormRepeatPswd.value) {
            alert('Повторите пароль');
            return;
        }
        if (inputFormRepeatPswd.value != inputFormPassword.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (inputFormPassword.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов.');
            return;
        }
        if (!checkbox.checked) {
            alert("Ошибка, вы должны принять соглашение");
            return;
        }

        let popupShow = document.getElementById('popup-show');
        let popupBtn = document.getElementById('popup-btn');
        // confirm('На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию.');
        popupShow.classList.add('opened');
        popupBtn.addEventListener('click', function () {
            popupShow.classList.remove('opened');
            goToLoginPage();
        });
    }

    function goToLoginPage() {
        inputFullname.value = '';
        inputUsername.value = '';
        inputFormEmail.value = '';
        inputFormPassword.value = '';
        inputFormRepeatPswd.value = '';
        let TextAccountTitle = document.getElementById('account-title');
        TextAccountTitle.innerHTML = 'Log in to the system';
        TextFormSign.innerHTML = 'Sign In';

        /*        document.getElementsByClassName("account-form-item")[0].style.display = "none";
                document.getElementsByClassName("account-form-item")[2].style.display = "none";
                document.getElementsByClassName("account-form-item")[4].style.display = "none";
                document.getElementsByClassName("form-checkbox")[0].style.display = "none";
                document.getElementsByClassName("form-sign-text")[0].style.display = "none";*/

        let userFullName = document.querySelector('#userFullName');
        let userEmail = document.querySelector('#userEmail');
        let userRepeatPswd = document.querySelector('#userRepeatPswd');
        let userHaveAccount = document.querySelector('#userHaveAccount');
        let userAgree = document.querySelector('#UserAgree');
        userFullName.remove();
        userEmail.remove();
        userRepeatPswd.remove();
        userAgree.remove();
        userHaveAccount.remove();

        signButton.onclick = onLogin;
    }

    function onLogin() {
        if (!inputUsername.value) {
            alert('Заполните поле username');
            return;
        }
        if (!inputFormPassword.value) {
            alert('Заполните поле password');
            return;
        }
        alert("Добро пожаловать, " + inputUsername.value + "!");
    }
}


