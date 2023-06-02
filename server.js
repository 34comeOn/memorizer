const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

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

app.post('/api/sign-in', (req, res)=> {
    const {
        email,
        password,
    } = req.body;

    User.where({ email: email, password: password }).find()
    .then(result=> {
        if (result[0]) {
            res.send(result[0])
        } else {
            console.log('pass or email does not match')
            res.status(403).end();
        }
    })
    .catch(err=> console.log(err))

})

app.get('/data', (req, res)=> {
    User.find()
    .then(result=> res.send(result))
    .catch(err=> console.log(err))
})

app.post('/api/sign-up', (req, res)=> {
    const {
        email,
        password,
        userName,
        subscription,
        currentToken,
        currentCollection,
        userCollectionsData
    } = req.body;
    
    const user = new User({
        email,
        password,
        userName,
        subscription,
        currentToken,
        currentCollection,
        userCollectionsData
    });

    User.where({ email: email }).find()
    .then(result=> {
        if (!result[0]) {
            user.save()
            .catch(err=> console.log(err))
            .then(()=> {
                User.where({ email: email }).find()
                .then(result=> res.send(result[0]))
                .catch(err=> console.log(err))
            })
        } else {
            console.log('user exists')
            res.status(400).end();
        }
    })
    .catch(err=> console.log(err))
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