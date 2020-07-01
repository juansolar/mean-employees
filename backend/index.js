const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT ||3000);

//middlewares

//routes


//star server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})