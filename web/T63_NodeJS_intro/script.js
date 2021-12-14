// when you make changes in code ctl C and restart server
// When you want to add html code make text/html(here line no 14
//node(node enter in terminal)
//REPL(Read Evaluate Print Loop)
//_(underscore means back variable)
//.exit 

// node .\script.js
// console.log("Hello world");


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World,Rutuja here');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Styling Links And Button</title>
      <!-- <link rel="stylesheet" href="style.css"> -->
      <style>
          .container{
      border:2px solid red;
      background-color: rgb(209, 255, 209);
      padding:34px;
      margin:34px;
  }
  
  a{
      text-decoration: none;
      color:black;
  }
  
  a:hover{
      color:rgb(0, 0, 0);
      background-color:sandybrown;
      
  }
  
  a:active{
      background-color: blue;
  }
  
  a:visited{
      background-color:yellow;
  }
  
  .btn{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-style:bold;
      background-color: rgb(231, 99, 99);
      padding:6px;
      border:none;
      cursor:pointer;
      font-size: 13px;
      border-radius:4px;
  }
  
  .btn:hover{
      color:rgb(0, 0, 0);
      background-color: rgb(222, 151, 240);
      border:2px solid black;
  }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sequi illum recusandae fugit. Quibusdam, facere aut quos eligendi eum accusamus deleniti error temporibus aspernatur obcaecati maxime cum eaque earum ratione at culpa quam rerum tenetur, quidem similique itaque mollitia facilis fugiat. Sunt fuga deserunt laboriosam quidem, tempora ipsam officia.</p>
  
          <a href="#" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});