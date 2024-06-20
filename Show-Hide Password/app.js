let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");



eyeicon.onclick=function(){
    if(password.type=="password"){
        password.type="text"
        eyeicon.src="downloadopen.png"
    }
    else{
        password.type="password"
        eyeicon.src="downloadclose.png"
    }
}




//function in js-->onlick=call() in html element
//element.addEventListener("onclick",function(){})   --queryselector
//element.onclick=function(){}   --document.getElementById / selector