const input=document.querySelector('#text');
const showTextButton=document.querySelector('#show-text-button');
const h1Button=document.querySelector('#h1');
const h2Button=document.querySelector('#h2');
const h3Button=document.querySelector('#h3');
const output=document.querySelector('#output');

showTextButton.addEventListener('click',()=>{
output.innerText=input.value;
})

h1Button.addEventListener('click',()=>{
    output.style.fontSize="2em";
    output.style.fontWeight="bolder";
})

h2Button.addEventListener('click',()=>{
    output.style.fontSize="1.5em";
    output.style.fontWeight="bolder";
})
h3Button.addEventListener('click',()=>{
    output.style.fontSize="1.17rem";
    output.style.fontWeight="bolder";
})