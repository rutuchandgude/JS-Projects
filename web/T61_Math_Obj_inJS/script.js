//Printing the Math Object
let m = Math;
console.log(m);

//Printing the constrants Math Object
console.log("The value of Math.E is ",Math.E);
console.log("The value of Math.PI is ",Math.PI);
console.log("The value of Math.LN2 is ",Math.LN2);
console.log("The value of Math.SQRT1_2 is",Math.SQRT1_2);
console.log("The value of Math.LOG2E is ",Math.LOG2E);

//Printing the Function from Object
let a=34.64534;
let b=89;

console.log("The value of a and b is ",a,b);
console.log("The value of a and b rounded is ",Math.round(a),Math.round(b));

//power
console.log("3 raised to the power of 2 is ",Math.pow(3,2))
console.log("2 raised to the power of 12 is ",Math.pow(2,12))
console.log("1 raised to the power of 2 is ",Math.pow(1,2))

//sqrt
console.log("Square root of 36 is ",Math.sqrt(36))
console.log("Square root of 36 is ",Math.sqrt(64))
console.log("Square root of 36 is ",Math.sqrt(50))

//ceil and floor
console.log("5.8 rounded up to nearest integer is ",Math.ceil(5.8))
console.log("5.8 rounded down to nearest integer is ",Math.floor(5.8))

//Abs function
console.log("Absolute value of 5.66 is ",Math.abs(5.66))
console.log("Absolute value of -5.66 is ",Math.abs(-5.66))

//Trigonometric Functions
console.log("The value of sin(pi) is ",Math.sin(Math.PI))
console.log("The value of sin(pi) is ",Math.sin(Math.PI/2))
console.log("The value of tan(pi) is ",Math.sin(Math.PI/2))

//Min and max
console.log("Minimum value of 4,5,6 is ",Math.min(4,5,6));
console.log("Minimum value of 14,5,16 is ",Math.min(14,5,16));
console.log("Maximum value of 4,5,6 is ",Math.max(4,5,6));
console.log("Maximum value of 14,5,16 is ",Math.max(14,5,16));

//Generating a random number
let r=Math.random();
console.log("The random umber is ",r);


//Random number b/w(a,b)=a+(b-a)*Math.random()
let a1=1;
let b1=100;
let r1_100=a1 + (b1-a1)*Math.random();
console.log("The random number is ",r1_100);

// let a1=50;
// let b1=60;
// let r50_60=a1 + (b1-a1)*Math.random();
// console.log("The random number is ",r50_60);


