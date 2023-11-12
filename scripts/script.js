window.onload = function (e) {
    //валидация
    let inputFullName =  $('#form-fullName');
    let inputUsername = $('#form-username');
    let inputFormEmail = $('#form-email');
    let inputFormPassword = $('#form-password');
    let inputFormRepeatPswd = $('#form-repeat-pswd');
    let checkbox = document.getElementById('form_choice');
 /*   checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");

        }
    });*/


    const signButton = document.getElementById('form-sign-btn');
    const signLink =  document.getElementById('userHaveAccount');

    signButton.onclick = onRegister;
    signLink.onclick = goToLoginPage;
    function onErrorField(name) {
        hasError = true;
        name.css('border-color', 'red');
        name.css('color' , 'red');
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
       console.log('onRegister');
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
        //     хотя бы 1:  буква в верхнем регистре, цифра, спецсимвол
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
            console.log(checkbox);

            return;
        }
        console.log(checkbox.value);

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
        let TextFormSign = $('#form-sign-btn');
        TextFormSign.html('Sign In');
        let userHaveAccount = $('#userHaveAccount');
        let linkText = $('#link-text');

            linkText.html("Registration");

        let userFullName =  $('#userFullName');
        let userEmail = $('#userEmail');
        let userRepeatPswd = $('#userRepeatPswd');
        // let userHaveAccount = $('#userHaveAccount');
        let userAgree =  $('#UserAgree');

        userFullName.remove();
        userEmail.remove();
        userRepeatPswd.remove();
        userAgree.remove();

        signButton.onclick = onLogin;
        if ( TextAccountTitle.innerHTML == 'Log in to the system')
        {   console.log (TextAccountTitle.innerHTML);
           // signLink.onclick = location.reload();
           signLink.onclick = onRegister;
           //window.onload;
           //  location.reload();
            signLink.addEventListener('click', () => window.location.reload());
            }
    }

    function onLogin() {
        if (!inputUsername.val()) {
            onEmptyField(inputUsername);
            return;
        }
        if (!inputFormPassword.val()) {
            onEmptyField(inputFormPassword);
            return;
        }
        alert("Добро пожаловать, " + inputUsername.val() + "!");
    }
}
$(document).on('submit', 'form', function(e) {
    e.preventDefault(); // или же return false
});

