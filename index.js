const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
    res.render('index')
})

app.get('/response',function(req,res){
    res.render('response')
})

app.post('/submit',function(req,res){
    const filename = req.body.username.split('.').join('');

    const data = `
        Username: ${req.body.username}
        Email: ${req.body.email}
        Mobile Number: ${req.body.mobile}
        College: ${req.body.college}
        Roll No: ${req.body.rollno}
        Branch: ${req.body.branch}
        Year: ${req.body.year}
        Interests: ${req.body.interests}
    `;

    fs.writeFile(`./files/${filename}.txt`,data, function(err){
        res.redirect("/response")
    })
})

app.listen(3000)