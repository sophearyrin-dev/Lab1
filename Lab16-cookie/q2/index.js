const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");
const date = new Date();
const hour = date.getHours();
const session = require('express-session')

var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'salt for cookie signing',
}));

console.log(hour);
if(hour >=6 && hour <18){
    app.use(express.static(path.join(__dirname + '/public')));
}
else {
    app.use(express.static(path.join(__dirname + '/public/css/')));
}

app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

var n;
var a;

app.get(`/output`, (request, response, next) => {
    
    response.send(`Welcome ${request.session.name}, age ${request.session.age}`);
})

app.post('/result', (request, response, next)=>{
      if(request.session.name){
    console.log("Already created student: " + request.session.name + ", " + request.session.age + ", " +
    request.session.cookie.expires);
  }else{
    console.log("Student created now...");
    request.session.name = request.body.username;
    request.session.age = request.body.age;
  }
    response.redirect("/output");
})


app.listen(3000, () => {
    //all of your code are here, this is what will happen in server
    console.log('Running server on port : 3000 .....');
});