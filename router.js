const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const path = require("path");
const db = require("./db");

//#region Hardcoded Array DBs
/**users */
const users = [
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
const findUserByEmail = (email) => users.find((user) => user.email === email);
const findUserById = (id) => users.find((user) => user.id === id);
/**quizzes */
var quizzes = [
	{ quizId: "001", userId: "001", name: "Quiz A", chars: ["あ", "い", "う"] },
	{ quizId: "002", userId: "002", name: "Quiz A", chars: ["あ", "い"] },
];

const listQuizzesByUserId = (userId) =>
	quizzes.filter((quiz) => quiz.userId === userId);
const findQuizByUserId = (userId) =>
	quizzes.find((quiz) => quiz.userId === userId);
const findQuizById = (quizId) => quizzes.find((quiz) => quiz.quizId === quizId);
const removeQuizById = (quizId) => {
	quizzes = quizzes.filter((quiz) => quiz.quizId !== quizId);
};
//#endregion Hardcoded Array DBs

//#region User Routes
//Register new user
router.post("/register", async (req, res) => {
	console.log("register user");
	//obtain email, name, and password from request body
	const { email, name, password } = req.body;
	//if email or password is missing, send response indicating this to user
	if (!(email && password))
		return res.send({
			success: false,
			message: "Must enter an email and password",
		});
	//if user with email is found, send response indicating email isn't available
	if (findUserByEmail(email))
		return res.send({
			success: false,
			message: "This email is already registered",
		});
	//hash password and, if no error, add new user's info to database
	try {
		const saltRounds = 10;
		console.log(password);
		const user = {
			id: Date.now().toString(),
			email,
			name,
			// password: await bcrypt.hash(password, saltRounds),
			password,
		};
		users.push(user);
		console.log("New User registered", user);
		console.log("Users", users);
		res.send({
			success: true,
			message: user.email,
		});
	} catch (err) {
		console.log(err.message);
		res.send({ success: false, message: err.message });
	}
});
//Get all registered users
router.get("/register", async (req, res) => {});
//User login
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	/**If both email and password are not contained in request return error message */
	if (!(email && password)) return res.send("Missing information");
	/**Find user with email sent in request */
	const user = findUserByEmail(email);
	/**If user is found, compare passwords
	 *Otherwise return 'user doesn't exist' error message	*/
	if (user) {
		/**If passwords match then add user to session and return success message
		 * otherwise, return 'password mismatch' error message */
		// if (await bcrypt.compare(password, user.password)) {
		if (password === user.password) {
			req.session.user = { id: user.id, email: user.email, name: user.name };
			return res.send({
				success: true,
				user: user.email,
				message: "Successfully logged in",
			});
		} else {
			return res.send({ success: false, message: "Passwords do not match" });
		}
	} else {
		return res.send({
			success: false,
			message: "That email is not registered",
		});
	}
});
//Check for logged in user
router.get("/login", (req, res) => {
	console.log("get Login");
	console.log(req.session.user);
	if (req.session.user) return res.send({ isLoggedIn: true });
	else return res.send({ isLoggedIn: false });
});
//Log user out
router.delete("/login", (req, res) => {
	req.session.destroy();
	res.send("Logged out");
});
//#endregion User Routes

//#region Quiz Routes
//List all quizzes with user id
router.get("/quizzes", async (req, res) => {
	const user = req.session.user;
	console.log("Get Quizzes");
	if (user) {
		const userId = user.id;
		const quizzesWithId = listQuizzesByUserId(userId);
		console.log(user.id);
		console.log(quizzesWithId);
		res.send(quizzesWithId);
	} else {
		return res.send("Not logged in");
	}
});
//Add quiz to database with session user id
router.post("/quizzes", (req, res) => {
	const user = req.session.user;
	/** If session user exists, get id and store quiz using id */
	if (user) {
		const { name, chars } = req.body;
		console.log("Adding quiz", req.body);
		const userId = user.id;
		const quiz = {
			id: Date.now().toString(),
			userId,
			name,
			chars,
		};
		quizzes.push(quiz);
		res.send({ success: true, message: "Quiz Added" });
	} else {
		return res.send({ success: false, message: "Not logged in" });
	}
});
//Remove a quiz
router.delete("/quizzes/:quizId", (req, res) => {
	const user = req.session.user;
	/** If session user exists, find quiz useing quizId from route params
	 * double check userId matches quiz's userId
	 * remove quiz from database
	 */
	if (user) {
		const userId = user.id;
		const { quizId } = req.params;
		if (quizId) {
			const quiz = findQuizById(quizId);
			console.log(quizzes);
			console.log(quiz);
			if (quiz) {
				if (quiz.userId === userId) {
					console.log(quizzes);
					removeQuizById(quizId);
					res.send({ success: true });
				} else {
					return res.send("User does not own this quiz");
				}
			} else
				return res.send({ success: false, message: "No quiz with that id" });
		} else {
			return res.send("Need Quiz ID for delete");
		}
	} else {
		return res.send("Not logged in");
	}
});
//#endregion Quiz Routes

module.exports = router;
