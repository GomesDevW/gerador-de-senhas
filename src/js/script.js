let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let checkInput = document.querySelector('#check-without-special-char')
let tooltip = document.querySelector('.tooltip')

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let charsetWithEspecialChar = '!@#$%¨&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
sizePassword.innerHTML = this.value;
}


function generatePassword() {

    let pass = '';

    if(checkInput.checked){

        for (let i = 0, n = charsetWithEspecialChar.length; i < sliderElement.value; ++i) {
        pass += charsetWithEspecialChar.charAt(Math.floor(Math.random() * n));
        }
    }else{
        for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        }
    }

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    tooltip.innerText = 'Senha copiada com sucesso!'
    setTimeout(function() {
        tooltip.innerText = 'Clique na senha para copiar. 👆';
    }, 3000);

}

