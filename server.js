const express = require('express');
const dataBase = require('./server-modules/dataBase');
const refreshTimeStamp = require('./server-modules/serverUtills')
const cors = require('cors');
const mongoose = require('mongoose');
const Question = require('./models/question');

const db = 'mongodb+srv://barabanovm:Noway-2steal@cluster0.j32xaeo.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then((res)=> console.log('Connected to DB'))
    .catch((err)=> console.log(err))

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3002;

app.listen(PORT, (error) => {
    error? console.log(error): console.log(`listen localhost${PORT}`)
});

app.get('/', (req, result)=> {
    console.log('/');
})

// app.get('/data', (req, result)=> {
//     result.send(JSON.stringify(dataBase));
// })
app.get('/data', (req, res)=> {
    Question.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
})

app.post('/api/repeat', (req, res)=> {
    // const{repeatedTimeStamp} =req.body;
    
    // const question = new Question({repeatedTimeStamp});

    console.log(req.body)
    // question.save()

    // Question.find()
    // .then(result=> res.send(result))
    // .catch(err=> console.log(err))

    // refreshTimeStamp(dataBase, req.body.id, req.body.repeatedTimeStamp);
    // res.send(JSON.stringify(dataBase));
})

// app.put('/api/repeat', (req, res)=> {
//     const{id, repeatedTimeStamp} =req.body;

//     Question.findByIdAndUpdate(id, {repeatedTimeStamp})
//     .then(result=> res.send(result))
//     .catch(err=> console.log(err))

// })