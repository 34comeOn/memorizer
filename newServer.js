const express = require('express');
const dataBase = require('./server-modules/dataBase');

const app = express();

const PORT = 3002;

app.listen(PORT, (error) => {
    error? console.log(error): console.log(`listen localhost${PORT}`)
});

app.get('/', (req, result)=> {
    console.log('/')
})

app.get('/data', (req, result)=> {
    result.send(dataBase);
})