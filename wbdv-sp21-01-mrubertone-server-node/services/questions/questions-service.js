const questions = require("./questions.json")

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (qzid) => {
    return questions.filter((question) => {
        return question.quizId === qzid;
    })
}
const findQuestionById = (quid) => {
    return questions.find((question) => {
        return question._id === quid;
    })
}

module.exports = {
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
}