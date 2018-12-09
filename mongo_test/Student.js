const mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    name: {
        firstname: String,
        lastname: String,
    },
    age: Number,
    attending: Boolean
})

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;