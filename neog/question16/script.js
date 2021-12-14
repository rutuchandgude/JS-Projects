const checkBtn=document.querySelector("#checkbtn");
const output=document.querySelector("#output");

var obj1={
    name:"ram",
    power:"2500",
    yuga:"Treta"
}

var obj2={
    name:"krishna",
    power:"2325",
    yuga:"Dwapar"
}

function checkPower(obj1,obj2){

    if(obj1.power>obj2.power){
        output.innerText=obj1.name;
    }
    else{
        output.innerText=obj2.name
    }
}

function totalPower(obj1,obj2){
    var totalPowerObj1=obj1.power + obj1.name.length*35;
    var totalPowerObj2=obj2.power + obj2.name.length*35;

    if(totalPowerObj1>totalPowerObj2){
        output.innerText=obj1.name;
    }
    else{
        output.innerText=obj2.name;
    }
}

function checkCharacter(obj1,obj2){
    if(obj1.name.length*35>obj2.name.length*35)
    {
        output.innerText=obj1.name;
    }
    else{
        output.innerText=obj2.name;
    }
}

checkBtn.addEventListener("click",function(){totalPower(obj1,obj2)})