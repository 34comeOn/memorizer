// const http = require('http');
// const dataBase = require('./server-modules/dataBase');

// const PORT = 3002;

// const server = http.createServer((req, res) => {
//     console.log('Server request!!!!');
//     console.log(req.url, req.method);
//     if (req.url === '/data') {
//         res.setHeader('Content-Type', 'application/json')

//         res.write(dataBase);
//         res.end();
//     } else if (req.url === '/') {
//         res.end();    
//     } else if (req.url === '/favicon.ico') {
//         res.end();    
//     } else if (req.url === '/api/repeat') {
//         console.log(req.body)
//         res.end();
//     }
// })

// server.listen(PORT, 'localhost', (error) => {
//     error? console.log(error): console.log(`listen localhost${PORT}`)
// })


const express = require('express');
const dataBase = require('./server-modules/dataBase');
const cors= require('cors');

const app = express();
app.use(cors());
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