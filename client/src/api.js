const axios = require("axios");
axios.defaults.withCredentials = true;

const apiRoute = "/api";
const quizRoute = "/quizzes";
const authRoute = "/auth";
const loginRoute = "/login";
const registerRoute = "/register";

export default {
	getUsersQuizzes: function () {
		return axios.get("/api/quizzes");
	},
	deleteQuiz: function (quizId) {
		return axios.delete("/api/quizzes/" + quizId);
	},
	postQuiz: function (name, chars) {
		return axios.post("/api/quizzes", {
			name,
			chars,
		});
	},
	getLogin: function () {
		return axios.get("/api/auth/login");
	},
	postLogin: function (email, password) {
		return axios.post("/api/auth/login", { email, password });
	},
	deleteLogin: function () {
		return axios.delete("/api/auth/login");
	},
	postRegister: function (email, name, password) {
		return axios.post("/api/auth/register", { email, name, password });
	},
	patchRegister: function ({ email, password, name }) {
		console.log(name);
		return axios.patch("/api/auth/register", {
			email,
			password,
			name,
		});
	},
	deleteRegister: function () {
		return axios.delete("/api/auth/register");
	},
};
