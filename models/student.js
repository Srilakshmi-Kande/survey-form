const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")

const studentSchema = mongoose.Schema({
    username: String,
    email: String,
    mobile: Number,
    college: String,
    rollno: Number,
    branch: String,
    year: Number,
    interests: String
})

module.exports = mongoose.model('student',studentSchema);