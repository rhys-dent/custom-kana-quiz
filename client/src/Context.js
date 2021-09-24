import { createContext, useRef, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState();

	const quiz = useRef({});
	function setQuiz(newQuiz) {
		quiz.current = { ...newQuiz, answers: [] };
	}
	function retakeQuiz() {
		quiz.current.chars = quiz.current.answers.map((answer) => answer.char);
		console.log(quiz.current);
		quiz.current.answers = [];
	}
	return (
		<Context.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				quiz,
				setQuiz,
				retakeQuiz,
			}}
		>
			{children}
		</Context.Provider>
	);
}
