const input=document.querySelector("#input");
const output=document.querySelector("#output");

input.addEventListener('input',showError);

function showError(){
let noOfInput=input.value;
let lengthOfChar=noOfInput.length;

if(lengthOfChar>10){
output.innerText=`You have reached your limit`;
output.style.color="red";
}
// else{
//     output.style.color="green";
//     output.innerText=`success`;


}
