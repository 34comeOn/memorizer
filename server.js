const http = require('http');
const dataBase = require('./server-modules/dataBase')

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log('Server request, dude!!!!');
    console.log(req.url, req.method);
    if (req.url === '/some') {
        res.setHeader('Content-Type', 'application/json')

        res.write(JSON.stringify(dataBase));
        res.end();
    } else if (req.url === '/') {
        res.end();
    }
})

server.listen(PORT, 'localhost', (error) => {
    error? console.log(error): console.log(`listen localhost${PORT}`)
})
