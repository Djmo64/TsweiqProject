
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');








const app = express();

const PORT = process.env.PORT || 8080;


const routes = require('./Routes/api');


mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://djmo64:tasweiq123@tasweiqdb.pymjn.mongodb.net/TasweiqDB?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 


mongoose.connection.on('connected', () =>{
    console.log('mongoose is connected!');
})

//https://tasweiq-app.herokuapp.com/ -- new origin for cors policy
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
//request logger
app.use(morgan('tiny'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));






app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
app.use('/api', routes); 

//serve static assets for production
if(process.env.NODE_ENV === 'production'){
    // set static production folder
    app.use(express.static('Client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
   });
} 


app.listen(PORT,console.log(`server is starting at ${PORT}`));
