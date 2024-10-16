const express = require('express');
const port = 8828;
const app = express();

app.set('view engine', 'ejs');

let users = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render('index', {
        all: users
    });
});

app.post('/insertRecord', (req, res) => {
    const { name, phone } = req.body;
    let obj = {
        id: Math.floor(Math.random() * 100000),
        name: name,
        phone: phone,
    };
    users.push(obj);
    console.log("Add Successfully");
    return res.redirect('/');
});

app.post('/deleteRecord', (req, res) => {
    const { id } = req.body;
    users = users.filter(user => user.id != id);
    res.redirect('/');
});

app.post('/updateRecord', (req, res) => {
    const { id, name, phone } = req.body;
    const userIndex = users.findIndex(user => user.id == id);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].phone = phone;
        console.log("Update Successfully");
    }
    res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port :- ${port}`);
});