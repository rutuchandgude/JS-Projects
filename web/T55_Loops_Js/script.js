//FOR LOOP
// let i=0;
// for(i=0;i<3;i++){
//     console.log(i);
// }


//Three wayes to ITERATE ARRAY
let friends=["Rohan","Sanjeev","Deepti","Pooja","Skillf"];

// for(let index=0;index<friends.length;index++){
//     console.log("Hello Friend, "+friends[index]);
// }

// friends.forEach(function f(element){
//     console.log("Hello Friend, "+element +" to modern JS");
// });

// for(element of friends){
//     console.log("Hello Friend, " + element +" to modern Js again");
// }



let employee={
    name:"Harry",
    salary:2,
    channel:"CWH"
}
//use this loop to iterate over objects in JavaScript
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}


//while loop in JS
let i=0;
while(i<4){
console.log(`${i} is less than 4`);
i++;
}


//do while loop in js
let j=34;
do{
    console.log(`${j} is less than 4 and we are inside do while loop`);
    j++;
}while(j<4);
