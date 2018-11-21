let mongoose = require('mongoose');

let Student = require('./Student');
let arr = [];

mongoose.connect('mongodb://localhost/mongoose-basics', function(err) {
    if(err) throw err;
    console.log('Successfully connected');

    let Dea = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstname:'Dea',
            lastname:'Samniashvili'
        },
        courses: 'ThHub',
        createdAt: {
            type: Date,
            default: Date.now
        }
    })


    let Salome = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstname:'Salome',
            lastname:'Babukhadze'
        },
        courses: 'TechHub',
        createdAt: {
            type: Date,
            default: Date.now
        }
    })

    Student.find({
        courses: /Tub/i
    }).exec(function(err, students) {
        if (err) throw err;
        
        console.log(students);
    })

    Dea.save(function(err) {
        if (err) throw err;
       console.log(`Student Dea added!`);
    });

    Salome.save(function(err) {
        if (err) throw err;
       console.log(`Student Salome added!`);
    });

});

