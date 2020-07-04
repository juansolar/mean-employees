const express = require('express');
const app = express();
const cors = require('cors');

const { mongoose } = require('./datebase');

//settings
app.set('port', process.env.PORT ||3000);

//middlewares
app.use(express.json()); //entender los formatos json que vienen del navegador
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use(require('./routes/employee.routes'));

//star server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})