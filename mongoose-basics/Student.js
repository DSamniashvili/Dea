let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: String,
    },
    courses: String
})

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;