const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
        age = 22;
    }
    res.send(`Welcome ${name}, age ${age}`);
});
app.listen(3000);