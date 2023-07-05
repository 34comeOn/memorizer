const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
// const Test = require('./models/user');

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

app.get('/:id/:user', (req, res)=> {
    let collectionId = req.params.id.slice(1);
    let currentUserId = req.params.user.slice(1);

    User.findById(currentUserId)
    .then(result=> {
        res.send(result.userCollectionsData.find(collection => collection._id.toString() === collectionId))
    })
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

app.post('/api/new-collection', (req, res)=>  {
    let {
        id,
        newUserCollection
    } = req.body;

    User.updateOne(
        { _id: id },
        { $push: { userCollectionsData: newUserCollection } }
    )
    .then(()=> {
        User.findById(id)
        .then(result=> res.send(result.userCollectionsData))
        .catch(err=> console.log(err))
    })
})

app.delete('/:id/:user', (req, res) => {
    let collectionId = req.params.id.slice(1);
    let userId = req.params.user.slice(1);

    User.updateOne(
        { _id: userId },
        { $pull: { userCollectionsData: { _id: collectionId }  } }
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData))
    })
    .catch(err=> console.log(err))
})

app.post('/api/new-card', (req,res) => {
    let {
        UserId,
        CollectionId,
        newCard,
    } = req.body;

    User.updateOne(
        {_id: UserId, 'userCollectionsData._id': CollectionId},
        {$push: {
            'userCollectionsData.$.collectionData':newCard
        }}

    )
    .then(result => {
        console.log(result)
    })
    .then(()=> {
        User.findById(UserId)
        .then(result=> res.send(result.userCollectionsData))
    })
    .catch(err=> console.log(err))
})

// app.post('/api/new-card', (req, res)=>  {
//     let {
//         UserId,
//         CollectionId,
//         newCard,
//     } = req.body;
//     // const test = ObjectId('64a46394f6d70045ee938cb5')

//     // User.find({_id: '6479b98a8c9acda9bf3d7460'})
//     Test.find({_id: '64a41651dc6cafb244c613ce'})
//     .then(result => {
//         console.log(result)
//         // result[0].userCollectionsData[0].collectionData.push(newCard)
//     }
//     )

//     // User.findOneAndUpdate({userCollectionsData: { $elemMatch: {_id: '647efb8b47b24efaf58e4e0a'}}})
//     // // (
//     // //     { '64a463a6f6d70045ee938cb9'},
//     //     // { $push: { collectionData: newCard }, userCollectionsData: { _id: CollectionId }  }
//     // // )
//     //     .then(result => {
//     //         console.log(result[0].userCollectionsData[0])
//     //         // result[0].userCollectionsData[0].collectionData.push(newCard)
//     //     }
        
//     //     )
//     //    .then(()=> {
//     //     User.findById(UserId)
//     //     .then(result=> {
//     //         // console.log(result)
//     //         res.send(result.userCollectionsData)
//     //     })
//     //     .catch(err=> console.log(err))
//     // })

//     // User.updateOne(
//     //     { _id: UserId },
//     //     { $push: { userCollectionsData: newCard } }
//     // )
//     // .then(()=> {
//     //     User.findById(UserId)
//     //     .then(result=> res.send(result.userCollectionsData))
//     //     .catch(err=> console.log(err))
//     // })
// })

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