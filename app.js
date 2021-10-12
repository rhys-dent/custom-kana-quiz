//#region Require dependencies
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
//#endregion Require dependencies

//#region Require other
const authRouter = require("./routers/auth-router");
const quizRouter = require("./routers/quiz-router");
//#endregion Require other

//#region Initialization
const app = express();
/**cors */
app.use(
	cors({
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
//session
app.use(
	session({
		key: process.env.SESSION_KEY,
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { expires: 60 * 60 * 24, secure: false },
	})
);
//router

app.use("/api/quizzes", quizRouter);
app.use("/api/auth", authRouter);
/*serve react client*/
const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));
app.get("(/*)?", (req, res) => {
	res.sendFile(path.join(buildPath, "index.html"));
});
//#endregion Initialization

/**Start server */
app.listen(4000, () => console.log("Server running on port", 4000));
