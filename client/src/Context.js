import { createContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "./api";
export const Context = createContext();

export function Provider({ children }) {
	const history = useHistory();
	const [scrollTop, setScrollTop] = useState(0);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [quizList, setQuizList] = useState([]);
	const [message, setMessage] = useState(false);
	const [tileWidth, setTileHeight] = useState(0);
	window.onscroll = () => {
		setScrollTop(window.scrollY);
	};
	function displayMessage(message) {
		setMessage(message);
		setTimeout(() => setMessage(false), 5000);
	}
	const quiz = useRef({});
	function setQuiz(newQuiz) {
		quiz.current = {
			...newQuiz,
			guesses: [],
			unguessedChars: newQuiz.chars.map((chars) => chars),
		};
	}
	function retakeQuiz() {
		console.log(quiz.current.chars);
		setQuiz(quiz.current);
	}
	//#region API functions
	function login(email, password) {
		setIsAuthenticated(false);
		api.postLogin(email, password).then((res) => {
			if (res.data.success) {
				setIsAuthenticated(res.data.name);
			}
			//if fail, then the reason is displayed to the user
			else {
				displayMessage(res.data.message);
			}
		});
	}
	function logout() {
		api.deleteLogin().then((res) => {
			if (res.data.success) {
				setIsAuthenticated(false);
			}
		});
	}
	function register(email, name, password) {
		api.postRegister(email, name, password).then((res) => {
			//if successfull response is received, redirect user to login page
			if (res.data.success) {
				console.log("Registered");
				login(email, password);
			} else {
				displayMessage(res.data.message);
			}
		});
	}
	function loginCheck() {
		api.getLogin().then((res) => {
			if (res.data.success) {
				setIsAuthenticated(res.data.name);
			} else {
				setIsAuthenticated(false);
			}
		});
	}
	function changeName(newName) {
		api.patchRegister({ name: newName }).then((res) => {
			if (res.data.success) {
				setIsAuthenticated(newName);
			}
		});
	}
	function changePassword(currentPassword, newPassword, confirmNewPassword) {
		console.log("Changing password");
		if (newPassword === confirmNewPassword) {
			api.patchRegister({ currentPassword, password: newPassword });
		} else displayMessage("new password entries must be identical");
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
	function deleteUser() {
		api.deleteRegister().then((res) => {
			if (res.data.success) logout();
		});
	}
	////#endregion API Functions
	return (
		<Context.Provider
			value={{
				scrollTop,
				setScrollTop,
				headerHeight,
				setHeaderHeight,
				message,
				setMessage,
				displayMessage,
				tileWidth,
				setTileHeight,
				register,
				changeName,
				changePassword,
				deleteUser,
				login,
				logout,
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
