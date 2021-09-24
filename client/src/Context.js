import { createContext, useRef, useState } from "react";
import api from "./api";
export const Context = createContext();

export function Provider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [quizList, setQuizList] = useState([]);
	const quiz = useRef({});
	function setQuiz(newQuiz) {
		quiz.current = { ...newQuiz, answers: [] };
	}
	function retakeQuiz() {
		quiz.current.chars = quiz.current.answers.map((answer) => answer.char);
		console.log(quiz.current);
		quiz.current.answers = [];
	}
	//#region API functions
	function login(email, password) {
		api.postLogin(email, password).then((res) => {
			if (res.data.success) {
				setIsAuthenticated(true);
			}
			//if fail, then the reason is displayed to the user
			else {
				console.log(res.data.message);
			}
		});
	}
	function register(email, password) {
		api.postRegister(email, password).then((res) => {
			//if successfull response is received, redirect user to login page
			if (res.data.success) {
				//redirect to login
			}
			console.log(res.data.message);
		});
	}
	function loginCheck() {
		api.getLogin().then((res) => {
			if (res.data.isLoggedIn) {
				console.log("user logged in");
				setIsAuthenticated(true);
			} else {
				console.log("user not logged in");
				setIsAuthenticated(false);
			}
		});
	}
	function createQuiz(name, chars) {
		api.postQuiz(name, chars).then((res) => {
			if (res.data.success) {
				console.log("Quiz Added Successfully");
				updateQuizList();
			}
		});
	}
	function updateQuizList() {
		api.getUsersQuizzes().then((res) => {
			setQuizList(res.data);
		});
	}
	function removeQuiz(quizId) {
		api.deleteQuiz(quizId).then((res) => {
			console.log(res.data);
			if (res.data.success) updateQuizList();
		});
	}
	////#endregion API Functions

	return (
		<Context.Provider
			value={{
				register,
				login,
				loginCheck,
				isAuthenticated,
				createQuiz,
				updateQuizList,
				removeQuiz,
				quizList,
				quiz,
				setQuiz,
				retakeQuiz,
			}}
		>
			{children}
		</Context.Provider>
	);
}
