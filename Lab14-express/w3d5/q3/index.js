const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");
const date = new Date();
const hour = date.getHours();

if(hour >=6 && hour <18){
    app.use(express.static(path.join(__dirname + '/public')));
}
else if(hour>=18 && hour <6) {
    app.use(express.static(path.join(__dirname + '/public/css')));
}

app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/result', (req, res, next)=>{
    let name = req.body.username;
    let myage = req.body.age;
    res.send(`Welcome ${name}, age ${myage}`);
})


app.listen(3000, () => {
    //all of your code are here, this is what will happen in server
    console.log('Running server on port : 3000 .....');
});


