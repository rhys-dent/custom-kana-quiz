const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../db");
//#region Quiz Routes
//return all quizzes containter user's id
router.get("/", async (req, res) => {
	//get user session data
	const user = req.session.user;
	//confirm user session
	if (user) {
		const userId = user.id;
		//get array of all quizes with user id
		const quizzesWithId = db.listQuizzesByUserId(userId);
		//send quiz array to client
		res.send(quizzesWithId);
	} else {
		return res.send({ success: false, message: "Not logged in" });
	}
});
//add quiz to database with user's id from session
router.post("/", (req, res) => {
	const user = req.session.user;
	/** If session user exists, get id and store quiz using id */
	if (user) {
		//deconstruct request body
		const { name, chars } = req.body;
		const userId = user.id;
		//create quiz object
		const quiz = {
			quizId: Date.now().toString(),
			userId,
			name,
			chars,
		};
		//add new quiz to database
		db.addQuiz(quiz);
		res.send({ success: true, message: "Quiz Added" });
	} //send failure response if no user session found
	else return res.send({ success: false, message: "Not logged in" });
});
//Remove a quiz
router.delete("/:quizId", (req, res) => {
	const user = req.session.user;
	/** If session user exists, find quiz useing quizId from route params
	 * double check userId matches quiz's userId
	 * remove quiz from database
	 */
	// confirm user session
	if (user) {
		const userId = user.id;
		//deconstruct request parameters
		const { quizId } = req.params;
		// confirm quiz id exists
		if (quizId) {
			//get quiz from database using quiz's id
			const quiz = db.findQuizById(quizId);
			//confirm quiz with id exists
			if (quiz) {
				//confirm user id from session matches user id in quiz
				if (quiz.userId === userId) {
					//remove quiz from database
					db.removeQuizById(quizId);
					//send success message
					res.send({
						success: true,
						message: "Quiz: " + quiz.name + " was deleted.",
					});
				} //send failure response if user id from session does not match user id from quiz
				else
					return res.send({
						success: false,
						message: "User does not own this quiz",
					});
			}
			//send fail response if no quiz exists
			else return res.send({ success: false, message: "No quiz with that id" });
		}
		//send failure response if no quiz id is contained in parameters
		else
			return res.send({ success: false, message: "Need Quiz ID for delete" });
		//send failture response if no user session
	} else return res.send({ success: false, message: "Not logged in" });
});
//#endregion Quiz Routes
module.exports = router;
