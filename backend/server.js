const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const entriesRouter = require('./routes/entries');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/entries', entriesRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost/DailyPlanner', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, db) => {
    if(err){
        console.log("Not connected to DB", err)
    }
    else{
        console.log("connected to server Successfully!!!")
    }
});

// Server static assets if in production


app.listen(4500, () => {
    console.log('CONNECTED TO PORT 4500')
});