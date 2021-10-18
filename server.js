const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient //connection to our mongo database
// const cors = require('cors');

var db, collection; // 
//url is the connection to the database
const url = "mongodb+srv://user:Rio12345@cluster0.bgwen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//the const is giving the database a name in order to get your own url
const dbName = "demo";

//app is your server
//ejs looks like html but it enables you to plug content into your html dynmaically
//meaning you dont have to hardcode in your html
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('views')) //it'll allow the html css to work without needing else if routes
// app.options('*', cors());


//this code is setting up the server and telling it to listen
//doing everything it needs to do to connect to the database
app.listen(9000, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});
//get is getting information from the client
app.get('/', (req, res) => { //req is a request from the client side
    //res is a response from the serverside
    res.render('index.ejs', {}) // render out an html file
})

// app.post('/messages', (req, res) => {
//     //post is sending info to the server
//     db.collection('messages').insertOne({ name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown: 0 }, (err, result) => {
//         if (err) return console.log(err)
//         console.log('saved to database')
//         res.redirect('/')
//     })
// })

// app.put('/messages', (req, res) => {
//     db.collection('messages')
//         .findOneAndUpdate({ name: req.body.name, msg: req.body.msg }, {
//             $set: {
//                 thumbUp: req.body.thumbUp + 1
//             }
//         }, {
//             sort: { _id: -1 },
//             upsert: true
//         }, (err, result) => {
//             if (err) return res.send(err)
//             res.send(result)
//         })
// })

// //just like an event listener
// app.delete('/messages', (req, res) => {
//     db.collection('messages').findOneAndDelete({ name: req.body.name, msg: req.body.msg }, (err, result) => {
//         if (err) return res.send(500, err)
//         res.send('Message deleted!')
//     })
// })
