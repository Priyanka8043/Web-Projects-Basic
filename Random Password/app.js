let passwordbox= document.getElementById("password");

const length=8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const num="124567890"
const symbols="@#$%&"

const all=upperCase+lowerCase+num+symbols;

function createPassword(){
    let password="";

    password += upperCase[Math.floor(Math.random()*upperCase.length)];   //"+="" adds in urrent password
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(password.length<length){
        password+=all[Math.floor(Math.random()*all.length)]
    }

    passwordbox.value=password;

}


function copyPassword(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);

}


