//npm install mongoose
const mongoose =require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

const url = process.env.MONGODB_URL
const url1 = process.env.MONGODB_URL_DEV

//connect mongodb to mongoose
mongoose.connect(url || url1);
const db=mongoose.connection;

//error 
db.on('error',console.error.bind(console,'error connecting to mongo db'));

//successfully connected
db.once('open',function(){
    console.log('connected to the database to mongo db');
});

//export
module.exports = db;