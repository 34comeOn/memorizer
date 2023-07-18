const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const getPunishmentForLatePractice = require('./server-modules/serverUtills')

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


app.get('/choose-collection/:id/:user', (req, res)=> {
    let collectionId = req.params.id.slice(1);
    let currentUserId = req.params.user.slice(1);

    User.findById(currentUserId)
    .then(allUserData=> {
        const collectionBeforePunishingForLatePractice = allUserData.userCollectionsData.find(collection => collection._id.toString() === collectionId);
        res.send(collectionBeforePunishingForLatePractice);
        
        let punishedCollectionData = collectionBeforePunishingForLatePractice.collectionData.map((card) => {
            const timesBeenRepeated = card.collectionItemTimesBeenRepeated;
            const timeStamp = card.collectionItemRepeatedTimeStamp;
            const timesBeenRepeatedAfterPunish =  getPunishmentForLatePractice(timesBeenRepeated, timeStamp)

            if (card.collectionItemTimesBeenRepeated !== timesBeenRepeatedAfterPunish) {
                card.collectionItemRepeatedTimeStamp = Date.now();
            }

            card.collectionItemTimesBeenRepeated = timesBeenRepeatedAfterPunish;

            return card
        })

        User.updateOne(
            {_id: currentUserId, 
                'userCollectionsData': {
                    '$elemMatch': {
                      '_id': collectionId,
                    }
                }
            },
            {$set: 
                { 
                    'userCollectionsData.$[i].collectionData': punishedCollectionData,
                }
            },
            {
                arrayFilters: [
                    {
                      'i._id': collectionId,
                    },
                ],
            },
        )
        .catch(err => console.log(err))


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
        userId,
        collectionId,
        creatingNewCategory,
        newCard,
    } = req.body;

    let newCollectionCategoryTitle= newCard.collectionItemCategory;
    let newCollectionCategoryColor= newCard.collectionItemColor;

    if (newCollectionCategoryTitle && creatingNewCategory) {
        User.updateOne(
            {_id: userId, 'userCollectionsData._id': collectionId},
            {$push: {
                'userCollectionsData.$.collectionСategories':
                {
                    label: newCollectionCategoryTitle,
                    value: newCollectionCategoryTitle,
                    collectionCategoryColor: newCollectionCategoryColor,
                }
            }}
        )
        .catch(err=> console.log(err))
    }

    User.updateOne(
        {_id: userId, 'userCollectionsData._id': collectionId},
        {$push: {
            'userCollectionsData.$.collectionData':newCard
        }}
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData.find(collection => collection._id.toString() === collectionId)))
    })
    .catch(err=> console.log(err))
})


app.delete('/card/:cardId/:collectionId/:userId', (req, res) => {
    let cardId = req.params.cardId.slice(1);
    let collectionId = req.params.collectionId.slice(1);
    let userId = req.params.userId.slice(1);

    User.updateOne(
        { _id: userId,
            'userCollectionsData': {
                '$elemMatch': {
                  '_id': collectionId,
                  "collectionData._id": cardId
                }
            }
        },
        {$pull: 
            { 
                'userCollectionsData.$[i].collectionData': { _id: cardId },
            }
        },
        {
            arrayFilters: [
                {
                  'i._id': collectionId,
                },
            ],
        },
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData.find(collection => collection._id.toString() === collectionId)))
    })
    .catch(err => console.log(err))
})


app.put('/api/repeat', (req, res)=> {
    let {
        userId, 
        cardId, 
        collectionId,
        collectionItemTimesBeenRepeated,
        collectionItemRepeatedTimeStamp,
    } =req.body;

    User.updateOne(
        {_id: userId, 
            'userCollectionsData': {
                '$elemMatch': {
                  '_id': collectionId,
                  "collectionData._id": cardId
                }
            }
        },
        {$set: 
            { 
                'userCollectionsData.$[i].collectionData.$[k].collectionItemTimesBeenRepeated': collectionItemTimesBeenRepeated,
                'userCollectionsData.$[i].collectionData.$[k].collectionItemRepeatedTimeStamp': collectionItemRepeatedTimeStamp,
            }
        },
        {
            arrayFilters: [
                {
                  'i._id': collectionId,
                },
                {
                  'k._id': cardId,
                },
            ],
        },
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData.find(collection => collection._id.toString() === collectionId)))
    })
    .catch(err => console.log(err))
})


app.put('/api/edit-collection', (req, res)=> {
    let {
        userId, 
        collectionId,
        collectionColor,
        collectionTitle,
    } =req.body;

    User.updateOne(
        {_id: userId, 
            'userCollectionsData': {
                '$elemMatch': {
                  '_id': collectionId,
                }
            }
        },
        {$set: 
            { 
                'userCollectionsData.$[i].collectionColor': collectionColor,
                'userCollectionsData.$[i].collectionTitle': collectionTitle,
            }
        },
        {
            arrayFilters: [
                {
                  'i._id': collectionId,
                },
            ],
        },
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData))
    })
    .catch(err => console.log(err))
})

app.put('/api/edit-card', (req,res) => {
    let {
        userId,
        collectionId,
        cardId,
        creatingNewCategory,
        editedCard,
    } = req.body;

    let newCollectionCategoryTitle= editedCard.collectionItemCategory;
    let newCollectionCategoryColor= editedCard.collectionItemColor;

    if (newCollectionCategoryTitle && creatingNewCategory) {
        User.updateOne(
            {_id: userId, 'userCollectionsData._id': collectionId},
            {$push: {
                'userCollectionsData.$.collectionСategories':
                {
                    label: newCollectionCategoryTitle,
                    value: newCollectionCategoryTitle,
                    collectionCategoryColor: newCollectionCategoryColor,
                }
            }}
        )
        .catch(err=> console.log(err))
    }
    
    User.updateOne(
        {_id: userId, 
            'userCollectionsData': {
                '$elemMatch': {
                  '_id': collectionId,
                  "collectionData._id": cardId
                }
            }
        },
        {$set: 
            { 
                'userCollectionsData.$[i].collectionData.$[k].collectionItemTitle': editedCard.collectionItemTitle,
                'userCollectionsData.$[i].collectionData.$[k].collectionItemAnswer': editedCard.collectionItemAnswer,
                'userCollectionsData.$[i].collectionData.$[k].collectionItemCategory': editedCard.collectionItemCategory,
                'userCollectionsData.$[i].collectionData.$[k].collectionItemColor': editedCard.collectionItemColor,
            }
        },
        {
            arrayFilters: [
                {
                  'i._id': collectionId,
                },
                {
                  'k._id': cardId,
                },
            ],
        },
    )
    .then(()=> {
        User.findById(userId)
        .then(result=> res.send(result.userCollectionsData.find(collection => collection._id.toString() === collectionId)))
    })
    .catch(err => console.log(err))
})