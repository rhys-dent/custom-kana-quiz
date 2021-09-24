const axios = require("axios");
axios.defaults.withCredentials = true;

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
		return axios.get("/api/login");
	},
	postLogin: function (email, password) {
		return axios.post("/api/login", { email, password });
	},
	deleteLogin: function () {},
	postRegister: function (email, password) {
		return axios.post("/api/register", { email, password });
	},
};
