const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    if(hour >=6 && hour<18){
        app.use(express.static(path.join(__dirname + '/public')));
    }
    app.use(express.static(path.join(__dirname + '/public/css/')));
    res.render("index", {
        time: date.toTimeString(),
    });
});
app.listen(3000);