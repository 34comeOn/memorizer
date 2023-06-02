const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const questionSchema = new Schema({
//     filter: {
//         type: String,
//     },
//     repeatedTimeStamp: {
//         type: Number,
//         required: true
//     },  
//     timesBeenRepeated: {
//         type: Number,
//         required: true
//     },       
//     title: {
//         type: String,
//         required: true
//     },
//     answer: {
//         type: String,
//         required: true
//     },
// })

// const Question = mongoose.model('Question', questionSchema);

// module.exports = Question;

const CollectionItemCommentsSchema = new Schema({
    collectionItemCommentText: {
        type: String,
    },
    collectionItemCommentImage: {
        type: String,
    },
    collectionItemCommentPosition: {
        type: Number,
    },
}); 

const CollectionСategoriesSchema = new Schema({
    collectionCategoryTitle: {
        type: String,
        required: true
    },
    collectionCategoryColor: {
        type: String,
        required: true
    },
});

const CollectionTagsSchema = new Schema({
    collectionTagTitle: {
        type: String,
        required: true
    },
    collectionTagColor: {
        type: String,
        required: true
    },
});

const CollectionDataSchema = new Schema({
    collectionItemId: {
        type: String,
        required: true
    },
    collectionItemTitle: {
        type: String,
        required: true
    },
    collectionItemAnswer: {
        type: String,
        required: true
    },
    collectionItemRepeatedTimeStamp: {
        type: Number,
        required: true
    },
    collectionItemTimesBeenRepeated: {
        type: Number,
        required: true
    },
    collectionItemCategory: {
        type: String,
    },
    collectionItemColor: {
        type: String,
    },
    collectionItemPriority: {
        type: Number,
    },
    collectionItemTags: {
        type: [String],
    },
    collectionItemComments: {
        type: [CollectionItemCommentsSchema]
    },
});

const UserCollectionsDataSchema = new Schema({
    collectionId: {
        type: String,
        required: true
    },
    collectionColor: {
        type: String,
        required: true
    },
    collectionImage: {
        type: String,
        required: true
    },
    collectionTitle: {
        type: String,
        required: true
    },
    collectionAdminList: {
        type: [String],
        required: true
    },
    collectionСategories: {
        type: [CollectionСategoriesSchema],
    },
    collectionTags: {
        type: [CollectionTagsSchema],
    },
    collectionData: {
        type: [CollectionDataSchema],
        required: true
    },
});

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    subscription: {
        type: String,
        required: true
    },
    currentToken: {
        type: String,
        required: true
    },
    currentCollection: {
        type: String,
        required: true
    },
    userCollectionsData: {
        type: [UserCollectionsDataSchema],
        required: true
    },
    // userCollectionsData: {
    //     [
    //         {
    //         collectionId: {
    //             type: String,
    //             required: true
    //         },
    //         collectionColor: {
    //             type: String,
    //             required: true
    //         },
    //         collectionImage: {
    //             type: String,
    //             required: true
    //         },
    //         collectionTitle: {
    //             type: String,
    //             required: true
    //         },
    //         collectionAdminList: {
    //             type: [String],
    //             required: true
    //         },
    //         collectionСategories: {
    //             [{
    //                 collectionCategoryTitle: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 collectionCategoryColor: {
    //                     type: String,
    //                     required: true
    //                 },
    //             }]: Schema.Types.Mixed,
    //         },
    //         collectionTags: {
    //             [{
    //                 collectionTagTitle: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 collectionTagColor: {
    //                     type: String,
    //                     required: true
    //                 },
    //             }]: Schema.Types.Mixed,
    //         },
    //         collectionData: {
    //             [{
    //                 collectionItemId: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 collectionItemTitle: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 collectionItemAnswer: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 collectionItemRepeatedTimeStamp: {
    //                     type: Number,
    //                     required: true
    //                 },
    //                 collectionItemTimesBeenRepeated: {
    //                     type: Number,
    //                     required: true
    //                 },
    //                 collectionItemCategory: {
    //                     type: String,
    //                 },
    //                 collectionItemColor: {
    //                     type: String,
    //                 },
    //                 collectionItemPriority: {
    //                     type: Number,
    //                 },
    //                 collectionItemTags: {
    //                     type: [String],
    //                 },
    //                 collectionItemComments: {
    //                     [{
    //                         collectionItemCommentText: {
    //                             type: String,
    //                         },
    //                         collectionItemCommentImage: {
    //                             type: String,
    //                         },
    //                         collectionItemCommentPosition: {
    //                             type: Number,
    //                         },
    //                     }]: Schema.Types.Mixed,
    //                 },
    //             }]: Schema.Types.Mixed,
    //         }
    //     }
    // ]: Schema.Types.Mixed,
    //     required: true,
    // },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;