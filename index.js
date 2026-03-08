const express = require('express');
const app = express();
const path = require('path');
const studentModel = require('./models/student');

app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.render('index')
})

app.get('/response',function(req,res){
    res.render('response')
})


app.post('/submit',async (req,res) => {
    let {username,email,mobile,college,rollno,branch,year,interests} = req.body;

    let createStudent = await studentModel.create({
        username,
        email,
        mobile,
        college,
        rollno,
        branch,
        year,
        interests
    })

    res.redirect("/response")

})

module.exports = app;