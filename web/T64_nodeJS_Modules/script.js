// const fs=require("fs");
// const text=fs.readFlileSync("dele.txt","utf-8");
// console.log("The content of the file is:");
// console.log(text);


const fs=require("fs");
const text=fs.readFlileSync("dele.txt","utf-8");
text=text.replace("browser","Rutuja");

console.log("The content of the file is:");
console.log(text);
console.log("Creating a new file...")
fs.writeFileSync("rutuja.txt",text);
