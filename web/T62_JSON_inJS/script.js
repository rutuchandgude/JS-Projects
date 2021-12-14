let jsonObj={
    name:"Rutuja",
    sirname:"Chandgude",
    friend:"ritu",
    food:"Pavbhaji"
}
console.log(jsonObj);
let myJsonStr=JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr=myJsonStr.replace('Pavbhaji','Panipuri');
console.log(myJsonStr);

newJsonObj=JSON.parse(myJsonStr);
console.log(newJsonObj)