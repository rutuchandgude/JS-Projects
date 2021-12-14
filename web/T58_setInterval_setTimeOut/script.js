// setTimeout => Allows us to run function one after the interval of time.(dont call the fn like () just write fun name)
// ClearTimeout=> Allows us to run the function repeatedly after the interval of time.


//----setTimeout-------
// function greet(name,byeText){
//     console.log("Hello Good Morning " +name +byeText);
// }
// setTimeout(greet,5000,"Rutuja"," Take Care");



//-----setInterval------
// function greet(name,byeText){
//     console.log("Hello Good Morning " +name +byeText);
// }
// setInterval(greet,1000,"Rutuja"," Take Care");



//----clearInterval---- It will clear giving output of setInterval
// function greet(name,byeText){
//     console.log("Hello Good Morning " +name +byeText);
// }
// intervalId=setInterval(greet,1000,"Rutuja","Take Care");
// clearInterval(intervalId);


//This will display current time
function displayTime(){
    time=new Date();
    console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(displayTime,1000);