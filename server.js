const express = require('express');
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

app.get('/data', (req, res)=> {
    Question.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
})

app.post('/api/post-question', (req, res)=> {
    const{
        answer,
        filter,
        repeatedTimeStamp,
        title,
        timesBeenRepeated,
    } =req.body;
    
    const question = new Question({
        answer,
        filter,
        repeatedTimeStamp,
        title,
        timesBeenRepeated,
    });

    question.save()
    .catch(err=> console.log(err))
})

app.put('/api/repeat', (req, res)=> {
    const{id, repeatedTimeStamp, timesBeenRepeated} =req.body;
    Question.findByIdAndUpdate(id, {repeatedTimeStamp, timesBeenRepeated } )
    .catch(err => console.log(err))
    .then(()=> {
        Question.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
    })
})