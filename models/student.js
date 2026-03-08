const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

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