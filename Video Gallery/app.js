let videoPlayer=document.getElementById("videoPlayer");
let myVideo=document.getElementById("myVideo");

function stop(){
    videoPlayer.style.display="none";
}

function play(file){
    myVideo.src=file;
    videoPlayer.style.display="block";
}



