const { log } = require('console');
const express = require('express');
const db = require('./config/mongoose');

require('dotenv').config();

const { dirname } = require('path');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:false}));

const PORT = 3000;

//middleware 1
// app.use((req, res, next) => {
//     req.myName = "Om Yadav";
//     console.log("middleware 1 called");
//     next();
// })

//middleware 2
// app.use((req, res, next) => {
//     console.log("middleware 2 called",req.myName);
//     next();
// })


//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Access static files
app.use(express.static('assets'));


app.use('/', require('./router/index'));

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server successfully running on port : ",PORT);
    }
})
