let btn=document.querySelector(".meme-btn");
let img=document.querySelector(".meme img");
let Mtitle=document.querySelector(".meme .title");
let Mauthor=document.querySelector(".meme .author");


const updateDetails=(url,title,author)=>{
      img.setAttribute("src",url);
    
      Mtitle.innerHTML=title;
      Mauthor.innerHTML= `Meme By: ${author}`;

};


const generateMeme=()=>{
    fetch("https://meme-api.com/gimme")
    .then((response)=>response.json())
    .then((data)=>{
        updateDetails(data.url,data.title,data.author)
    });

};


btn.addEventListener("click",generateMeme);

generateMeme();
