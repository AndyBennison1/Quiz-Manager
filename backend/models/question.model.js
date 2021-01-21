const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const questionSchema = new Schema({
    questionNo: { type: Number, required: true, unique: true},
    question: { type: String, required: true},
    answer1: {type: String, required: true},
    answer2: {type: String, required: true},
    answer3: {type: String, required: true},
    answer4: {type: String, required: true}

});

const Question = mongoose.model('question', questionSchema);

module.exports = Question; 