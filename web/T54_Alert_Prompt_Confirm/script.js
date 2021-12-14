//Alert in browser -Does not return anything
// alert("This is a message");



//Prompt
// let name=prompt("What is your name","Guest");
// console.log(name);


//Confirm
let deletePost=confirm("Do you really want to delete post?");
// console.log(deletePost);

if(deletePost){
    console.log("Your post has been deleted successfully!");
}
else{
    console.log("Your post has not been deleted");
}
