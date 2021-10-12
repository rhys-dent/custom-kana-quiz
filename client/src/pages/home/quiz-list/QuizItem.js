import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../Context";
export default function ({ quiz }) {
	const history = useHistory();
	const { setQuiz } = useContext(Context);
	console.log(quiz);
	return (
		<div
			className="quiz-item"
			style={{ width: "min(200px, 100%)" }}
			onClick={() => {
				setQuiz(quiz);
				history.push("/take-quiz");
			}}
		>
			<div>{quiz ? quiz.name : "+"}</div>
		</div>
	);
}
