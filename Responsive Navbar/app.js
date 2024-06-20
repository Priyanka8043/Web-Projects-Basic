let hamburger=document.querySelector(".hamburger");
let links=document.querySelector(".links");

hamburger.addEventListener("click",function(){
    links.classList.toggle("open");

    hamburger.classList.toggle("toogle");
})




