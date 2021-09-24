import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";
export default function ({ quiz }) {
	const history = useHistory();
	const context = useContext(Context);
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
					context.removeQuiz(quiz.quizId);
				}}
			>
				X
			</button>
		</div>
	);
}
