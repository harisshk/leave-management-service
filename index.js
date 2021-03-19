const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//import routes
const authRoute = require('./routes/auth');
const getRoute = require('./routes/employee'); 
const leaveRoute = require('./routes/leave')
//cors
const cors = require('cors');


//connect to db
mongoose.connect( process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log('Connected to db'))

//middleware 
app.use(express.json());
app.use(cors());


//routes midleware
app.use('/api/user',authRoute);
app.use('/api/employee',getRoute);
app.use('/api/leave',leaveRoute);

app.listen(4000,()=>console.log("Server running"))