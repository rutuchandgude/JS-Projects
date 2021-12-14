const apiBtn=document.querySelector("#apibtn");
const output=document.querySelector("#output");

var URL="https://unitube-server.herokuapp.com/playlists"

apiBtn.addEventListener("click",clickHandler)

function clickHandler(){
    fetch(URL)
    .then(response=>{
        if(response.status===401){
            output.innerText=response.statusText
            // console.log(response);
        }
    })
}


// function errorHandler(error){
//  output.innerText=error;
//  output.innerText=response.statusText
// }

// function clickHandler(){
//     fetch(URL)
//     .then(response=>response.json())
 
//     .catch(errorHandler)
// }


