/*
if (!localStorage.getItem('cookieAccepted')){
    $('.cookie').show();
}
$('.cookie-accept').click(function () {
    $('.cookie').hide();
    localStorage.setItem('cookieAccepted','1')
});
*/
/*в отдельный файл*/
/*
let cookie = {
    set: (name, value , options) => {
        if (!name || !value){
            return null;
        }
        let string = name + '=' + value;
        if(options) {
            string += ';' + options;
        }
        document.cookie = string;
        return cookie;
    },
    get: (name) => {
        const value = '; ' + document.cookie;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2)
            return parts.pop().split(`;`).shift();

    },
    delete: (name) => {
        document.cookie = name + `=expires=Thu, 01 Jan 1970 00:00:001 GMT`;
    }
}
*/
//////////////добавление в корзину bonus через localStorage,  не очищает куки!
let cart = [];
localStorage.clear();
let clients = [];
let cartArray = [];
$('#form-sign-btn').click(function (event) {

    let newClient = {};
    newClient.fullName = document.querySelector('#userFullName :nth-child(2)').value;
    newClient.userName = document.querySelector('#userName :nth-child(2)').value;
    newClient.emailName = document.querySelector('#userEmail :nth-child(2)').value;
    newClient.passwName = document.querySelector('#userPswd :nth-child(2)').value;
    newClient.agreeName = document.querySelector('#UserAgree :nth-child(2)');
    //console.log('newClient= ' + newClient);

    clients.push(newClient);



    let cart = localStorage.getItem('cart');
    if (cart) {
        cartArray = JSON.parse(cart);
    }
    cartArray.push(clients);

    localStorage.setItem('cart', JSON.stringify(cartArray));
    console.log(localStorage);


});
let showClients = (clients) => {
    clients.forEach((item) => {
        console.log('____Client: ' + item.fullName + '  ' + item.userName + '  ' + item.emailName + '  ' + item.passwName + '  ' + item.agreeName);
    });
};

showClients(clients);

let checkinUser = (clients, name, pswd) => {
    clients.forEach((item) => {

            if ((item.userName == name) && (item.passwName == pswd)) {
                return item.fullName;
            } else if
            (item.userName == name) {
                return "Неверный пароль";
            } else if (item.passwName == pswd) {
                return "Такой пользователь не зарегистрирован";
            } else {return "error!";}

        }
    );

    console.log("Больше всех потратил(а) " + clients, inputUsername.val(), inputFormPassword.val() + ".");
    let user = checkinUser(clients, inputUsername.val(), inputFormPassword.val() );
    alert("Добро пожаловать, " + user + "!");
}

let user = checkinUser(clients,inputUsername.val(), inputFormPassword.val() );

alert("Добро пожаловать, " + user + "!");

/*
JSON.parse(localStorage.getItem('cart'))
localStorage.clear();

* * */
/*
<div className="parent">
    <input></input>
    <button>123</button>
</div>
<div className="siblings">
    <p className="children"></p>
</div>

$('button').click(function(){
    var input = $(this).siblings('input'),
        val = input.val();
    if(val != ""){
        $(this).parent('.parent').find('.children').html(val);
    }
});
$(this).siblings('input').val('')

 */
// cartArray.push(productTitle2);
/*    cartArray.push(fullName.value);
      cartArray.push(userName.value);
      cartArray.push(emailName.value);
      cartArray.push(passwName.value);*/