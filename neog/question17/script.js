const readlineSync=require('readline-sync');
const chalk=require('chalk');

let news=readlineSync.question('News:');
let source=readlineSync.question('source:');

if(source.toLowerCase()==='facebook' || source.toLowerCase()==='whatsapp'){
  console.log(chalk.red("Don't belive things on Facebook,Whatsapp"))
}
else{
  console.log("genuine News");
}



