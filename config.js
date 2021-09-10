/**Passport Configuration */
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = function (passport, getUserByEmail, getUserById) {
	async function authenticateUser(email, password, done) {
		/**Attempt to Retrieve user by email from database with email value entered by the user*/
		const user = getUserByEmail(email);
		/**If user email is not found return error arg: false, user arg: false, and message */
		if (user == null) {
			return done(null, false, { message: "User email not found" });
		}
		try {
			/**compare entered and stored password
			 * if passwords match (bcrypt returns true), then return error arg: null, and the user object
			 * if passwords do not match, return error arg: null, user arg: false, and message*/
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, { message: "Passwords do not match" });
			}
		} catch (err) {
			/**if bcrypt.compare throws error, return that error */
			return done(e);
		}
	}
	passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
	/**Store user id in session */
	passport.serializeUser((user, done) => {
		return done(null, user.id);
	});
	/**Retrieve user from database using id */
	passport.deserializeUser((id, done) => {
		done(null, getUserById(id));
	});
};
module.exports.passport = passport;
/**End Passport Configuration */
