// ------Function------
// function greet(){
//     console.log("Good Morning");
// }
// greet();

   
 // ------Arrow function------
// let greet =  ()=> {
//     console.log('Good morning');
// }
// greet();

 
// ---Using setTimeout--------
// setTimeout(() =>{
//     console.log("We are inside setTimeout");
// },3000);


// let sum2=(a,b)=>{
//     return a+b;
// };


// let sum2=(a,b)=>a+b;


// let obj1={
//     names:["Harry","Rohan","SkillF","DJKhiladi"],
//     speak(){
//         this .names.forEach((student)=>{
//             console.log("Kukdoo koo" +student);
//         });
//     }
// }
// obj1.speak();


let obj={
    greeting:"Good Morning  ",
    names:["Harry","Rohan","Rutu","Ritu"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting +"kukdoo koo " +student);
        });
    }
}
obj.speak();