const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-schema')
const quizAttempts = mongoose.Schema({
    _id: String,
    score: Number,
    quiz: {type: String, ref: 'QuizzesModel'},
    answers: [questionSchema]
}, {collection: 'quizAttemptsSchema'})
module.exports = quizAttempts