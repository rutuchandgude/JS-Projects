const checkBtn=document.querySelector("#checkbtn");
const output=document.querySelector("#output");

var ramData={
    name:"Ram",
    age:"21",
    power:2500
}

var krishnaData={
    name:"krishna",
    age:"23",
    power:"2325"
}

checkBtn.addEventListener("click",function() {checkPower(ramData,krishnaData)})

function checkPower(ramData,krishnaData){
 
 if(ramData.power>krishnaData.power){
     output.innerText=ramData.name;
 }
     else{
         output.innerText=krishnaData.name;
     }

    }