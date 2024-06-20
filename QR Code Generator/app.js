
let imgbox=document.getElementById("imgbox");
let inputtext=document.getElementById("inputtext");

let display=document.getElementById("display");



function generate(){

    if(inputtext.value.length>0){
        imgbox.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputtext.value;
        display.classList.add("show-img");
    }
    else{
        inputtext.classList.add("error");
        setTimeout(() => {
            inputtext.classList.remove("error");
        },1000);
    }
    
    
}