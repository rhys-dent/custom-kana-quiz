const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../db");

//Register a new user
router.post("/register", async (req, res) => {
	const { email, name, password } = req.body;
	//if email or password is missing, send response indicating this to user
	if (!(email && password))
		//send failure response and return
		return res.send({
			success: false,
			message: "Must enter an email and password",
		});
	//if user with email is found, send response indicating email isn't available
	if (db.findUserByEmail(email))
		//send failure response and return
		return res.send({
			success: false,
			message: "This email is already registered",
		});
	//hash password and add new user's info to database
	try {
		const saltRounds = 10;
		//create new user object
		const user = {
			id: Date.now().toString(),
			email,
			name,
			// password: await bcrypt.hash(password, saltRounds),
			password,
		};
		//add new user to database
		db.addUser(user);
		//send success response
		res.send({
			success: true,
			message: user.email,
		});
	} catch (
		err
		//if error thrown by bcrypt, send failure response with error message to client
	) {
		return res.send({ success: false, message: err.message });
	}
});
//Update a user's data
router.patch("/register", async (req, res) => {
	const updatedData = req.body;
	const { id: userId } = req.session.user;
	console.log("Updating User " + userId);
	if (userId) {
		const updatedUser = db.updateUserById(userId, updatedData);
		if (updatedData.email) db.updateEmailByUserId(userId, updatedData.email);
		if (updatedData.password)
			db.updatePasswordByUserId(
				userId,
				updatedData.currentPassword,
				updatedData.password
			);
		if (updatedData.name) db.updateNameByUserId(userId, updatedData.name);
		req.session.user = updatedUser;
		res.send({ success: true, message: updatedUser });
	} else return res.send({ success: false });
});
//Remove user from database
router.delete("/register", async (req, res) => {
	const { id: userId } = req.session.user;
	if (userId) {
		db.removeUser(userId);
		res.send({ success: true });
	}
});
//User login
router.post("/login", async (req, res) => {
	//deconstruct post request body
	const { email, password } = req.body;
	/**If both email and password are not contained in request return error message */
	if (!(email && password)) return res.send({ message: "Missing information" });
	//retreive user data from database using email from post request
	const user = db.findUserByEmail(email);
	//confirm user exists
	if (user) {
		//Check the passord from post request against password in database//
		// if (await bcrypt.compare(password, user.password)) {

		if (password === user.password) {
			setUserSession(req, user);
			return res.send({
				success: true,
				name: user.name,
				message: "Successfully logged in",
			});
		} else {
			//Incorrect password response
			return res.send({ success: false, message: "Passwords do not match" });
		}
	} else {
		//User doesn't exist response
		return res.send({
			success: false,
			message: "That email is not registered",
		});
	}
});
//Check for user session
router.get("/login", (req, res) => {
	const user = req.session.user;
	//if user session exists, return user's name
	if (user) return res.send({ success: true, name: user.name });
	//send failure response if not user session
	else return res.send({ success: false, message: "User not logged in" });
});
//Log user out
router.delete("/login", (req, res) => {
	//end user session
	const user = req.session.user;
	//confirm user session exists
	if (user) {
		req.session.destroy();
		// send response confirm session has been ended
		res.send({ success: true });
	}
	//send failure response
	else res.send({ success: false, message: "already logged out" });
});
//#endregion User Routes
function setUserSession(req, { id, name, email }) {
	req.session.user = { id, email, name };
}

module.exports = router;
