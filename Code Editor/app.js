function run(){
    let htmlcode=document.getElementById("html-code").value;
    let csscode=document.getElementById("css-code").value;
    let jscode=document.getElementById("js-code").value;
    let op=document.getElementById("output");

    op.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
    op.contentWindow.eval(jscode);

    
}

