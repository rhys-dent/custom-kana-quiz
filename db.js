/**users */
const users = [];
const findUserByEmail = (email) => users.find((user) => user.email === email);
const findUserById = (id) => users.find((user) => user.id === id);
/**quizzes */
var quizzes = [];
const listQuizzesByUserId = (userId) =>
	quizzes.filter((quiz) => quiz.userId === userId);
const findQuizByUserId = (userId) =>
	quizzes.find((quiz) => quiz.userId === userId);
const findQuizById = (quizId) => quizzes.find((quiz) => quiz.id === quizId);
const removeQuizById = (quizId) => {
	quizzes = quizzes.filter((quiz) => quiz.id !== quizId);
};

module.exports = {
	findUserByEmail,
	findUserById,
	listQuizzesByUserId,
	findQuizByUserId,
	findQuizById,
	removeQuizById,
};
