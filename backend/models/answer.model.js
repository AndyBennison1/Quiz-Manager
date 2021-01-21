const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const answerSchema = new Schema({
    questionNo: {type:Number, required: true, unique: true},
    correctAnswer: { type: Number, required: true
    },
});

const Answer = mongoose.model('answer', answerSchema); 

module.exports = Answer; 