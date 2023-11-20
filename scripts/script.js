$(() => {
    // localStorage.clear();
    const CLIENTS_LS_KEY = 'clients';
    const elements = {
        inputs: {
            fullName: $('#form-fullName'),
            fullNameText: $('#fullNameText'),
            emailText: $('#emailText'),
            repeatPswdText: $('#repeatPswdText'),
            username: $('#form-username'),
            formEmail: $('#form-email'),
            formPassword: $('#form-password'),
            formRepeatPswd: $('#form-repeat-pswd'),
            checkAgree: $('#form_choice'),
            textAccountTitle: $('#account-title'),
            textFormSign: $('#form-sign-btn'),
            userHaveAccount: $('#userHaveAccount'),
            linkText: $('#link-text'),
            userAgree: $('#UserAgree'),
            accountText: $('.account-text'),
            formPlaceholderText: $('.form-placeholder-text'),

        },
    };
    let checkbox1 = document.getElementById('form_choice');
    const signButton = document.getElementById('form-sign-btn');
    const signLink = document.getElementById('userHaveAccount');

    signButton.onclick = onRegister;
    signLink.onclick = goToLoginPage;

    function onRegister() {
        $('.error-input').hide();
        $('.form-input').css('border-color', '#C6C6C4').css('color', '#323232');

        if (!elements.inputs.fullName.val()) {
            onEmptyField(elements.inputs.fullName);
            return;
        }
        if (!elements.inputs.fullName.val().match(/^[a-zA-ZА-Яа-яЁё+\s]*$/)) {
            onErrorField(elements.inputs.fullName);
            return;
        }
        if (!elements.inputs.username.val()) {
            onEmptyField(elements.inputs.username);
            return;
        }
        if (!elements.inputs.username.val().match(/^[А-Яа-яЁё\w-]+\s*$/)) {
            onErrorField(elements.inputs.username);
            return;
        }
        if (!elements.inputs.formEmail.val()) {
            onEmptyField(elements.inputs.formEmail);
            return;
        }
        if (!elements.inputs.formEmail.val().match(/^(?=.{1,30}$)[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            onErrorField(elements.inputs.formEmail);
            return;
        }
        if (!elements.inputs.formPassword.val()) {
            onEmptyField(elements.inputs.formPassword);
            return;
        }
        if (!elements.inputs.formPassword.val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)) {
            onErrorField(elements.inputs.formPassword);
            return;
        }
        if (!elements.inputs.formRepeatPswd.val()) {
            onEmptyField(elements.inputs.formRepeatPswd);
            return;
        }
        if (elements.inputs.formRepeatPswd.val() !== elements.inputs.formPassword.val()) {
            onErrorField(elements.inputs.formRepeatPswd);
            return;
        }
        if (!checkbox1.checked) {
            onUnChecked(elements.inputs.checkAgree);
            console.log(elements.inputs.checkAgree.value);
            console.log(elements.inputs.checkAgree);
            return;
        }
        console.log(elements.inputs.checkAgree.value);
        let user = {
            fullName: document.querySelector('#userFullName :nth-child(2)').value,
            userName: document.querySelector('#userName :nth-child(2)').value,
            pswd: document.querySelector('#userPswd :nth-child(2)').value,
            agreeName: document.querySelector('#UserAgree :nth-child(2)'),
        };
        onWriteLocalStorage(user);
        let popupShow = document.getElementById('popup-show');
        let popupBtn = document.getElementById('popup-btn');
        popupShow.classList.add('opened');
        popupBtn.addEventListener('click', function () {
            popupShow.classList.remove('opened');
            goToLoginPage();
        });
    }

    function onWriteLocalStorage(user) {
        let clients = JSON.parse(localStorage.getItem(CLIENTS_LS_KEY)) || [];
        clients.push(user);
        localStorage.setItem(CLIENTS_LS_KEY, JSON.stringify(clients));
    }

    function onErrorField(name) {
        name.css('border-color', 'red');
        name.css('color', 'red');
        name.next().next().show();
    }

    function onErrorLogin(name) {
        name.css('border-color', 'red');
        name.css('color', 'red');
        name.next().next().next().show();
    }

    function onEmptyField(name) {
        name.css('border-color', 'red');
        name.next().show();
    }

    function onUnChecked(name) {
        name.next().next().show();
    }

    function goToLoginPage() {
        elements.inputs.fullName.value = '';
        elements.inputs.username.value = '';
        elements.inputs.formEmail.value = '';
        elements.inputs.formPassword.value = '';
        elements.inputs.formRepeatPswd.value = '';
        elements.inputs.textAccountTitle[0].innerHTML = 'Log in to the system';
        elements.inputs.textFormSign.html('Sign In');
        elements.inputs.linkText.html("Registration");
        elements.inputs.fullName.remove();
        elements.inputs.fullNameText.remove();
        elements.inputs.formEmail.remove();
        elements.inputs.emailText.remove();
        elements.inputs.formRepeatPswd.remove();
        elements.inputs.repeatPswdText.remove();
        elements.inputs.userAgree.remove();
        signButton.onclick = onLogin;
        if (elements.inputs.textAccountTitle[0].innerHTML === 'Log in to the system') {
            signLink.onclick = onRegister;
            signLink.addEventListener('click', () => window.location.reload());
        }
    }

    function onLogin() {
        $('.error-input').hide();
        $('.form-input').css('border-color', '#C6C6C4').css('color', '#323232');

        if (!elements.inputs.username.val()) {
            onEmptyField(elements.inputs.username);
            return;
        }
        if (!elements.inputs.formPassword.val()) {
            onEmptyField(elements.inputs.formPassword);
            return;
        }
        let clients = JSON.parse(localStorage.getItem("clients")) || [];
        let userFind = '';
        const client = clients.find(client => client.userName === elements.inputs.username.val());
        console.log(client);
        try {
            clients.forEach((item) => {
                if (item.userName === elements.inputs.username.val()) {
                    userFind = item.fullName;
                    if (item.pswd !== elements.inputs.formPassword.val()) {
                        console.log("Неверный пароль");
                        onErrorLogin(elements.inputs.formPassword);
                    } else {
                        console.log("Добро пожаловать, " + item.fullName + "!");
                        onAccount(userFind);
                    }  // break in try-catch;
                }
            });
        } catch (e) {
            if (e.message !== 'catch value found') {
                throw e;
            }
        }
        if (userFind === '') {
            console.log('Такой пользователь не зарегистрирован');
            onErrorLogin(elements.inputs.username);
        }
    }

    function onAccount(userFind) {
        elements.inputs.formPlaceholderText.remove();
        elements.inputs.username.value = '';
        elements.inputs.formPassword.value = '';
        $('.error-input').hide();
        $('.form-input').css('border-color', '#C6C6C4').css('color', '#323232');
        elements.inputs.textAccountTitle[0].innerHTML = 'Welcome, ' + userFind + '!';
        elements.inputs.textFormSign.html('Exit');
        elements.inputs.linkText.html("Registration");
        elements.inputs.username.remove();
        elements.inputs.formPassword.remove();
        elements.inputs.linkText.remove();
        elements.inputs.accountText.remove();
        signButton.addEventListener('click', () => window.location.reload());
    }
});
$(document).on('submit', 'form', function (e) {
    e.preventDefault();
});