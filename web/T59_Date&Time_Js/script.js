// let now=new Date();
// console.log(now);


// let dt=new Date(1000);
// console.log(dt);


// let newDate=new Date("2020-09-12");
// console.log(newDate);




//----let newDate = new Date(year,month,date,hours,minutes,seconds,milliseconds); ------
let newDate = new Date(3020,4,6,9,3,2,34);
// console.log(newDate);

// let yr=newDate.getFullYear();
// console.log("The year is ",yr);

// let dt=newDate.getDate();
// console.log("The date is ",dt);

// let month=newDate.getMonth();
// console.log("The month is ",month);

// let hours=newDate.getHours();
// console.log("The hours is ",hours);

// newDate.setDate(3);
// console.log(newDate);


// newDate.setDate(34);
// console.log(newDate);

// newDate.setDate(80);
// newDate.setMinutes(29);
// console.log(newDate);




setInterval(updateTime,1000);

function updateTime(){
    time.innerHTML=new Date();
}






//--UTC timezone(Coordinated Universal Time(Time of london))--------