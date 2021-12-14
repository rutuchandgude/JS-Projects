const inputText=document.querySelector("#input");
const h1Btn=document.querySelector("#h1button");
const h2Btn=document.querySelector("#h2button");
const h3Btn=document.querySelector("#h3button");
const Btn=document.querySelector("#btn");
const outPut=document.querySelector("#output");

Btn.addEventListener('click',displayOutput)

h1Btn.addEventListener('click',btnH1)
h2Btn.addEventListener('click',btnH2)
h3Btn.addEventListener('click',btnH3)

function displayOutput(){
  outPut.innerText=inputText.value;
}

function btnH1(){
outPut.style.fontSize="3em";
outPut.style.fontWeight="bold";
}

function btnH2(){

    outPut.style.fontSize="2rem";
    outPut.style.fontWeight="bold";
}

function btnH3(){

    outPut.style.fontSize="1rem";
    outPut.style.fontWeight="bolder";
}