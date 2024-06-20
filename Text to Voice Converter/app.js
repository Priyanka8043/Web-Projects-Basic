let speech=new SpeechSynthesisUtterance();  //speech request

let button=document.querySelector("button");
let textarea=document.querySelector("textarea");

let voices=[];
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();  //It will provide all voices available on device.
    speech.voice=voices[0]; //default voice

    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});


button.addEventListener("click",()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
})





















// The SpeechSynthesisUtterance interface of the Web Speech API represents a "speech-request".
// It contains the content the speech service should read and information about how to read it
// (e.g. language, pitch and volume.)

//The speechSynthesis property returns a SpeechSynthesis object, which is the entry point into 
//using Web Speech API speech synthesis functionality and can be further used.


