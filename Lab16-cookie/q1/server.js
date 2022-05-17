const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine", "ejs");
app.set('views', path.join(__dirname , 'templates/views'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res, next) => {
    res.render("home", {
        titlepage : 'Login'
    });
})

app.post('/result', (req, res)=>{
    var info = {
        name : req.body.username,
        myage:req.body.age
    }

    if(req.cookies.name && req.cookies.myage) {
        console.log("Your student name is: " + req.cookies.info.name);
        console.log("Your student age is: " + req.cookies.info.myage);
        res.clearCookie('student name');
        res.clearCookie('student age');
      }else{
        // res.cookie("studentId", 614185, {maxAge: 3 * 24 * 60 * 60 * 1000, signed: false});
        res.cookie("student name", info.name);
        res.cookie("student age", info.myage);
        console.log("Cookie Created!");
      }

    res.render('result', {
        infoValue : info,
        titlepage : 'My Info'
    })


})


app.listen(3000, () => {
    //all of your code are here, this is what will happen in server
    console.log('Running server on port : 3000 .....');
});


