const path = require('path');
const express = require ('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const app = express();

// Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch( err => console.log(err));

//Importing routes
const indexRoutes = require('./routes/index');


// settings
//Tomar el puerto local
app.set('port', process.env.PORT || 3000);
// constante para reutilizar: __dirname
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
//Nos permite entender los datos del cliente al servidor
app.use(express.urlencoded({extended:false})); 


//Routes
app.use('/',indexRoutes);


//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server on port ${app.get('port')}`);
});