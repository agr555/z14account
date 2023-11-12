window.onload = function (e) {
    //валидация
    let inputFullName =  $('#form-fullname');
    let inputUsername = $('#form-username');
    let inputFormEmail = $('#form-email');
    let inputFormPassword = $('#form-password');
    let inputFormRepeatPswd = $('#form-repeat-pswd');
    let checkbox = $('#form_choice');
    /*checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    });*/
   // let TextFormSign = document.getElementById('form-sign-btn');





    const signButton = document.getElementById('form-sign-btn');
    const signLink = document.getElementById('userHaveAccount');

    signButton.onclick = onRegister;
    signLink.onclick = goToLoginPage;
    function onErrorField(name) {
        hasError = true;
        name.css('border-color', 'red');
        name.next().next().show();
    }
    function onEmptyField(name) {
        hasError = true;
        name.css('border-color', 'red');
        name.next().show();
    }
    function onRegister() {
        //валидация
        let hasError = false;
        $('.error-input').hide();
        $('.form-input').css('border-color', '#C6C6C4');

        //Full Name может содержать только буквы и пробел
        if (!inputFullName.val()) {
            onEmptyField(inputFullName);
            return;
        }
        if (!inputFullName.val().match(/^[a-zA-ZА-Яа-яЁё]+\s*$/)) {
            onErrorField(inputFullName);
            return;
        }
        //Your username - может содержать только буквы, цифры, символ подчеркивания и тире
         if (!inputUsername.val()) {
             onEmptyField(inputUsername);
             return;
         }
        // if (!inputUsername.val().match(/^[a-zA-ZА-Яа-яЁё\-_]+\s*$/)) {
        if (!inputUsername.val().match(/^[А-Яа-яЁё\w-]+\s*$/)) {
            onErrorField(inputUsername);
            return;
        }
        //4. Реализовать проверку введенного E-mail на корректность
               if (!inputFormEmail.val()) {
                   onEmptyField(inputFormEmail);
                   return;
        }
               if (!inputFormEmail.val().match(/^(?=.{1,30}$)[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                   onErrorField(inputFormEmail);
                   return;
        }
        //5. Поле пароля должно содержать минимум 8 символов, среди которых есть:
        //     - хотя бы одна буква в верхнем регистре
        //- хотя бы одна цифра
        //- хотя бы один спецсимвол
        //6. Password и Repeat Password должны совпадать

        if (!inputFormPassword.val()) {
            onEmptyField(inputFormPassword);
            return;
        }
        if (!inputFormPassword.val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)) {
            onErrorField(inputFormPassword);
            return;
        }
                if (!inputFormRepeatPswd.val()) {
                    onEmptyField(inputFormRepeatPswd);
                    return;
        }

                if (inputFormRepeatPswd.val() != inputFormPassword.val()) {
                    onErrorField(inputFormRepeatPswd);
                    return;
        }
//7. Пользователь должен согласиться с условиями
        if (!checkbox.checked) {
            onErrorField(checkbox);
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
        inputFullName.value = '';
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
        if (inputFormPassword.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов.');
            return;
        }
        alert("Добро пожаловать, " + inputUsername.value + "!");
    }
}


