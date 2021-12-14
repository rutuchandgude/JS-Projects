function greet(name,greetText="Greetings from JavaScript"){
    let name1="Name1";
    console.log(greetText + " "+name);;
    console.log(name+" is a good boy");
}
let name="Harry";
let name1="shubham";
let name2="Rohan";
let name3="sagar";
let greetText="Good Morning";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3);


// function sum(a,b,c){
//     let d=a+b+c;
//     return d;
//THIS LINE WILL NEVER EXECUTE (UNREACHABLE CODE (because we cant write anything after return))
// console.log("Function is returned");
// }
// let returnVal=sum(1,2,3);
// console.log(returnVal);


