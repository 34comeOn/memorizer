const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

// const db = 'mongodb+srv://barabanovm:Noway-2steal@cluster0.j32xaeo.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//     .connect(db)
//     .then((res)=> console.log('Connected to DB'))
//     .catch((err)=> console.log(err))

// const app = express();
// app.use(cors());
// app.use(express.json());
// const PORT = 3002;

// app.listen(PORT, (error) => {
//     error? console.log(error): console.log(`listen localhost${PORT}`)
// });

// app.get('/', (req, result)=> {
//     console.log('/');
// })

// app.get('/data', (req, res)=> {
//     User.find()
//     .then(result=> res.send(result))
//     .catch(err=> console.log(err))
// })

// app.post('/api/post-question', (req, res)=> {
//     const{
//         answer,
//         filter,
//         repeatedTimeStamp,
//         title,
//         timesBeenRepeated,
//     } =req.body;
    
//     const question = new User({
//         answer,
//         filter,
//         repeatedTimeStamp,
//         title,
//         timesBeenRepeated,
//     });

//     question.save()
//     .catch(err=> console.log(err))
// })

// app.put('/api/repeat', (req, res)=> {
//     const{id, repeatedTimeStamp, timesBeenRepeated} =req.body;
//     User.findByIdAndUpdate(id, {repeatedTimeStamp, timesBeenRepeated } )
//     .catch(err => console.log(err))
//     .then(()=> {
//         User.find()
//     .then(result=> res.send(result))
//     .catch(err=> console.log(err))
//     })
// })








// const db = 'mongodb+srv://barabanovm:Noway-2steal@cluster0.j32xaeo.mongodb.net/?retryWrites=true&w=majority';
const db = 'mongodb+srv://barabanovm:Noway-2steal@cluster2.d7n5n2k.mongodb.net/?retryWrites=true&w=majority';

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
    User.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
})

app.post('/api/post-user', (req, res)=> {
    const {
        email,
        password,
        userName,
        subscription,
        currentToken,
        currentCollection,
        userCollectionsData
    } =req.body;
    
    const user = new User({
        email,
        password,
        userName,
        subscription,
        currentToken,
        currentCollection,
        userCollectionsData
    });
    
    user.save()
    .catch(err=> console.log(err))
    .then(()=> {
        // User.find()
        User.where({ email: email }).find()
        .then(result=> res.send(result[0]))
        .catch(err=> console.log(err))
    })
})

app.put('/api/repeat', (req, res)=> {
    const{id, repeatedTimeStamp, timesBeenRepeated} =req.body;
    User.findByIdAndUpdate(id, {repeatedTimeStamp, timesBeenRepeated } )
    .catch(err => console.log(err))
    .then(()=> {
        User.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
    })
})