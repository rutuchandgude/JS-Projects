let main=document.getElementById('main');
console.log(main);  

let nav=document.getElementById('nav');
console.log(nav);

// nav.innerHTML="<li>Dynamic element</li>"

let containers=document.getElementsByClassName('container');
console.log(containers);

// let sel=document.querySelector('.container');
// console.log("Selector returns",sel);

// let sel=document.querySelector('#nav>li');
// console.log("selectors returns",sel)

let sel=document.querySelectorAll('#nav>li');
console.log("Selectors returns",sel); 

sel[0].innerHTML="Inserted"

