import CreateQuiz from "./create-quiz/CreateQuiz";
import axios from "axios";
import { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

export default function () {
	const [quizzes, setQuizzes] = useState([]);
	useEffect(() => {
		getQuizzes();
	}, []);
	function getQuizzes() {
		axios.get("/api/quizzes").then((res) => {
			setQuizzes(res.data);
		});
	}
	return (
		<div>
			<div>
				{quizzes.map((quiz) => (
					<QuizItem quiz={quiz} getQuizzes={getQuizzes} />
				))}
			</div>
			<CreateQuiz getQuizzes={getQuizzes} />
		</div>
	);
}
