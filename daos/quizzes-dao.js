const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => {
    return quizzesModel.find()
}
const findQuizById = (quizId) => quizzesModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }