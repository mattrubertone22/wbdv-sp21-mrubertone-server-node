const quizzes = require("./quizzes.json")

const findAllQuizzes = () => {
    return quizzes;
}
const findQuizById = (qid) => {
    return quizzes.find(quiz => quiz._id === qid);
}


module.exports = {
    findAllQuizzes, findQuizById,
}