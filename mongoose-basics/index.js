let mongoose = require('mongoose');

let Student = require('./Student');

mongoose.connect('mongodb://localhost/mongoose-basics', function (err) {
    if (err) throw err;
    console.log('Successfully connected');

    let Dea = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstname: 'Dea',
            lastname: 'Samniashvili'
        },
        courses: 'TechHub',
        createdAt: {
            type: Date,
            default: Date.now
        }
    })


    let Salome = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstname: 'Salome',
            lastname: 'Babukhadze'
        },
        courses: 'ThHub',
        createdAt: {
            type: Date,
            default: Date.now
        }
    })


    // Dea.save(function (err) {
    //     if (err) throw err;
    //     console.log(`Student Dea added!`);
    // });

    // Salome.save(function (err) {
    //     if (err) throw err;
    //     console.log(`Student Salome added!`);
    // });

    Student.remove({}, function (err) {
        if (err) throw err;
        console.log('successfully emptied!');
    })

    // Student.find({
    //     courses: /TechHub/i
    // }).exec((err, Students) => {
    //     if (err) throw err;
    //     if (Students.length == 0) {
    //         console.log(`Empty`);
    //     }
    //     console.log(Students);
    //     // console.log(`Using criteria, arr looks like: ${Students}`);
    // })
});

