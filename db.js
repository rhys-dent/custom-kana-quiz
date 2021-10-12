//#region Users
var users = [
	{
		id: "001",
		email: "rhyswdent@gmail.com",
		name: "Rhys",
		password: "password",
	},
	{
		id: "002",
		email: "other@gmail.com",
		name: "Thor",
		password: "password",
	},
];
//#endregion Users
const addUser = (user) => users.push(user);
const findUserByEmail = (email) => users.find((user) => user.email === email);
const findUserById = (id) => users.find((user) => user.id === id);
const updateUserById = (id, updatedData) => {
	//ensure id is prevented
	delete updatedData.id;

	//ensure email is not updated to email already existing in database
	if (updatedData.email && findUserByEmail(updatedData.email))
		delete updatedData.email;
	else {
		//send message back
	}

	//ensure current password entered by user matches password of user logged in
	if (
		updatedData.currentPassword &&
		updatedData.currentPassword != user.password
	)
		delete updatedData.currentPassword;

	const user = findUserById(id);
	//retrieve each property name in updatedData and assign to corresponding property in user object from database
	Object.keys(updatedData).forEach((key) => (user[key] = updatedData[key]));

	return user;
};
const updatePasswordByUserId = (userId, currentPassword, newPassword) => {
	console.log("updating password");
	const user = findUserById(userId);
	if (currentPassword === user.password) user.password = newPassword;
};
const updateEmailByUserId = (userId, email) => {};
const updateNameByUserId = (userId, name) => {};
const removeUser = (userId) => {
	users = users.filter((user) => user.id != userId);
};
//#region Quizzes
var quizzes = [
	{ quizId: "001", userId: "001", name: "Quiz A", chars: ["あ", "い", "う"] },
	{ quizId: "002", userId: "001", name: "Quiz B", chars: ["あ", "い"] },
	{ quizId: "003", userId: "001", name: "Quiz C", chars: ["あ", "い"] },
	{ quizId: "004", userId: "001", name: "Quiz D", chars: ["あ", "い"] },
];
const addQuiz = (quiz) => quizzes.push(quiz);
const listQuizzesByUserId = (userId) =>
	quizzes.filter((quiz) => quiz.userId === userId);
const findQuizByUserId = (userId) =>
	quizzes.find((quiz) => quiz.userId === userId);
const findQuizById = (quizId) => quizzes.find((quiz) => quiz.quizId === quizId);
const removeQuizById = (quizId) =>
	(quizzes = quizzes.filter((quiz) => quiz.quizId !== quizId));

//#endregion Quizzes
module.exports = {
	addUser,
	findUserByEmail,
	findUserById,
	updateUserById,
	updatePasswordByUserId,
	updateEmailByUserId,
	updateNameByUserId,
	removeUser,
	addQuiz,
	listQuizzesByUserId,
	findQuizByUserId,
	findQuizById,
	removeQuizById,
};
