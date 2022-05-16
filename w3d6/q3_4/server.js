const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname , 'templates/views'));
app.use(express.static(path.join(__dirname + '/public')));

const products = [
    {
        id : 1,
        name: "Milk",
        price : 1000,
        source : "https://m.media-amazon.com/images/I/710o0VupScL._AC_UX679_.jpg"
    },
    {
        id : 2,
        name: "Orange",
        price : 2000,
        source: "https://m.media-amazon.com/images/I/71oNefD40GL._SY679_PIbundle-6,TopRight,0,0_SX452SY679SH20_.jpg"
    },
    {
        id : 3,
        name: "Coconut",
        price : 3000,
        source: "https://m.media-amazon.com/images/I/81cUyN-hXuL._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
    },
];

app.get('/', (req, res, next) => {
    res.render("home", {
        titlepage : 'Homepage',
        pro : products
    });
})

app.listen(3000)