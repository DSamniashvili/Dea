const mongoose = require('mongoose');
let Student = require('./Student')

mongoose.connect('mongodb://localhost/mongoose-test', function(err) {
    if(err) throw err;
    console.log('successfully connected to the database');


    let Dea = new Student({
        name: {
            firstname: "Dea",
            lastname: "Samniashvili"
        },
        age: 22,
        attending: true,
        createdAt: {
            type: Date,
            default: Date.now
        }
    })

    // Dea.save( (err) => {
    //     if (err) throw err;
    //     console.log("Student successfully added!") 
    // })

    let Salome = new Student({
        name: {
            firstname: "Salome",
            lastname: "Samniashvili"
        },
        age: 22,
        attending: false,
        createdAt: {
            type: Date,
            default: Date.now
        }
    })

    Salome.save( (err) => {
        if (err) throw err;
        console.log("Student successfully added!") 
    })


    // Student.remove({}, (err)=> {
    //     if (err) throw err;
    //     console.log('successfully emptied')
    // })

    Student.remove(
        {"firstname: Salome"}
     )
})