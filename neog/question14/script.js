const checkBtn=document.querySelector("#checkbtn");
const output=document.querySelector("#output");

checkBtn.addEventListener("click",function (){checkAge(ramData,krishnaData)})

var ramData={
    name:"Ram",
    age:"25",
    yuga:"Treta"
}
 var krishnaData={
     name:"krishna",
     age:"31",
     yuga:"Dwapar"
 }

 function checkAge(ramData,krishnaData){
     if(ramData.age<krishnaData.age){
         output.innerText=krishnaData.name;
     }
     else{
         output.innerText=ramData.name;
     }
 }

