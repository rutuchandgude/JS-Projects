const inputPassword=document.querySelector('#password');
const submitButton=document.querySelector('#submit-btn');
const message=document.querySelector('#message');

function submitButtonHandler(){
    let inputPasswordValue=inputPassword.value;
    let noOfCharacters=inputPasswordValue.length;
    if(inputPasswordValue.length<10){
        message.style.color="red";
        message.innerText=`Number of characters are ${noOfCharacters}` + "\nMinimum 10 characters required"
        //submitButton.style.display="none";
    }
    else{
        message.style.color="green";
        message.innerText=`Number of characters are ${noOfCharacters}` + "\nsuccess";
        //submitButton.style.display="none";
    }
}
submitButton.addEventListener('click',submitButtonHandler)



