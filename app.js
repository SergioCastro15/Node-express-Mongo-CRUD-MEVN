const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// connect to DBconst uri = 'mongodb://localhost:27017/myapp';
const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:zemoga@mevn-batsg.mongodb.net/test?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then()
    .then(() => console.log('DB conected'))
    .catch((err) => console.log(err) );

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', require('./routes/nota'));

// importante , ejecutar la carpeta public despues de llamar las rutas , o si no , no llegan los llamados

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 4000}`);
});