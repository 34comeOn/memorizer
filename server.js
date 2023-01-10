const express = require('express');
const dataBase = require('./server-modules/dataBase');
const cors= require('cors');

const app = express();
app.use(cors());
app.use(express.json());
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
app.post('/api/repeat', (req, result)=> {
    console.log(req.body);
    result.send(req.body)
})