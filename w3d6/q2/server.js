const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname , 'templates/views'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res, next) => {
    res.render("home", {
        titlepage : 'Login'
    });
})

app.post('/result', (req, res, next)=>{
    var info = {
        name : req.body.username,
        myage:req.body.age
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


