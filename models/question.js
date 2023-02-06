const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    filter: {
        type: String,
    },
    repeatedTimeStamp: {
        type: Number,
        required: true
    },  
    timesBeenRepeated: {
        type: Number,
        required: true
    },       
    title: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;