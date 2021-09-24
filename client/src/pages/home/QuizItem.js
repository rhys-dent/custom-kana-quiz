import { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";
export default function ({ quiz, getQuizzes }) {
	const history = useHistory();
	const context = useContext(Context);
	console.log(quiz);
	return (
		<div>
			<h3>{quiz.name}</h3>
			<button
				onClick={() => {
					context.setQuiz(quiz);
					history.push("/take-quiz");
				}}
			>
				Take Quiz
			</button>
			<button
				onClick={() => {
					const route = "/api/quizzes/" + quiz.quizId;
					console.log(route);
					axios.delete(route).then((res) => {
						console.log(res.data);
						if (res.data.success) getQuizzes();
					});
				}}
			>
				X
			</button>
		</div>
	);
}
