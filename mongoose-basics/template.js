//თავდაპირველად ვქმით ფოლდერს პირობითად - Mongoose-basics
//შიგნით პირველ რიგში კეთდება init - ბრძანებით npm init
//მერე უკვე დროა რომ დავაყენოთ mongoose ბიბლიოთეკა, ბრძანებით npm install mongoose --save

//ვქმნით index.js -ფაილს, სადაც შემოგვაქვს ბიბლიოთეკა:
const mongoose = require('mongoose');
// შემდეგ უკვე ვა-connect - ებთ მონაცემთა ბაზასთან რომელსაც პირობითად შეგვიძლია დავარქვათ mongoose_basics
mongoose.connect('mongodb://localhost/mongoose_basics');

//connect არის მეთოდი, რომელსაც შეიძლება ასევე გადავცეთ ორი სხვა არასავალდებულო პარამეტრიც.
mongoose.connect(uri, options, function (error) {
    //აქ ხდება error - ზე შემოწმება
});
//მეორე პარამეტრი პირობითად შეიძლება იყოს ობიექტი, სადაც შეგვიძლია განვსაზღვროთ username, password.. იყოს თუ არა ისინი required და ა.შ.

//მესამე პარამეტრი, რომელიც შეიძლება მეორე პარამეტრიც იყოს, იმ შემთხვევაში თუ არ გვექნება არანაირი ობიექტი otions - ის ნაწილში, არის ფუნქცია, რომელიც გამოიძახება დაკავშირების მცდელობასთან ერთად.

//მისი ჩაწერა შეგვიძლია ორნაირად, ქოლბექ ფუნქციითა და Promise - თი
//(აქ წავა სქრინშოტი)

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

//Mongoose როგორც უკვე აღინიშნა გამოირჩევა მისი Schema - თი.
//Mongoose is an Object Document Mapper (ODM). 
// რაც ნიშნავს იმას, რომ Mongoose საშუალებას გვაძლევს განვსაზღვროთ ობიექტები, რომელთაც გააჩნიათ განსაზღვრული სქემა, რომელიც მერე იმეფება MongoDB - დოკუმენტად.

//Mongoose - ს ყველაზე მარტივი სქემა ასე გამოიყურება:
let mySchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

//თუმცა შეგვიძლია ცოტა უფრო Complicated გავხადოთ რამდენიმე დეტალის დამატებით, მაგალითად შევქმნათ სტუდენტების სია,   რომელთაც გააჩნიათ სახელი, გვარი, მისამართი, და ბაზაში დამატების დრო. 

//მისამართი თავის მხრივ ჩავშალოთ ქალაქად, ქუჩისა და მობილურის ნომრის ქვეობიექტად:

let studentSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
        required: true //შეგვიძლია ნებისმიერი ელემენტი გავხადოთ required
    },
    contact: {
        City: String,
        Street: String,
        mobile_number: Number
    },
    created: {
        type: Date,
        default: Date.now
    }
})


//რამდენადაც ვიცით, მონაცემტა ბაზაში ყველა ელემენტს აქვს თავისი უნიკალური ID.
//იმ შემთხვევაში, თუ სხვადასხვა სქემების დაკავშირება გვინდა ერთმანეთთან სწორედ ეს უნიკალური ID უნდა გამოვიყენოთ შემდეგნაირად:

let studentSchema = mongoose.Schema({
    // აი ასე: 
    _id: mongoose.Schema.Types.ObjectId,

    name: {
        firstName: string,
        lastName: string
    },
    contact: {
        City: string,
        Street: string,
        mobile_number: number
    },
    created: {
        type: Date,
        default: Date.now
    }
})

//რაც შეეხება სქემების შენახვას, მსგავსად როგორც კლასების შემთხვევაში ხდება, ვიღებთ რაიმე ცვლადს რეფერენსად, რომელიც ინახავს ჩვენს მოდელს:

let Student = mongoose.model('Student', studentSchema);

//იმისათვის რომ გაჩვენოთ თუ როგორ უნდა შევქმნათ და შევინახოთ ობიექტი MongoDB - ში, საჭიროა გამოვიყენოთ save მეთოდი. აი მაგალითად :

let Dea = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: 'Dea',
        lastName: 'Samniashvili'
    },
    contact: {
        City: 'Tbilisi',
        Street: 'Dumbadze',
        mobile_number: 551424484
    },
    created: {
        type: Date,
        default: Date.now
    }
});

Dea.save(function(err) {
    if (err) throw err;
     
    console.log('Student successfully saved.');
});
// });


//Mongoose საშუალებას გვაძლევს რომ სხვადასხვა საშუალებებით მოვნახოთ მონაცემები ჩვენს მონაცემთა ბაზაში. 
//ესენია find, findOne, and findById.

//find და findOne უფრო კომპლექსური ძებნისთვისაა და იღებს ობიექტს, ხოლოდ findById ლოგიკურად id - ის მიხედვით ეძებს კონკრეტულ ობიექტს.
Student.find({
    courses: 'TechHub'
}).exec((err, students) => {
    if (err) throw err;
    console.log(students.name);
})


//The exec() method of object is used to execute the search for a match in a specified string.



//ჩვენ ასევე შეგვიძლია ID - ის მიხედვით განვაახლოთ ობიექტი ჩვენს მონაცემთა ბაზაში:
Student.findById('59b31406beefa1082819e72f', function(err, student) {
    if (err) throw err;
     
    student.couses = 'StepAcademy';
     
    student.save(function(err) {
        if (err) throw err;
         
        console.log('Student updated successfully');
    })
})

// იმისათვის, რომ ვნახოთ, ნამდვილად დაემატა თუ არა ბაზაში სტუდენტები, მსგავსად postman - ისა, აქაც დაგვჭირდება სოფტვეარი, robomongo ...



