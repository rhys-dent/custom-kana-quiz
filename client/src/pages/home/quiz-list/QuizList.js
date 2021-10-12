import { useContext } from "react";
import { Context } from "../../../Context";
import QuizItem from "./QuizItem";

export default function ({ setShowCreateQuiz }) {
	const context = useContext(Context);
	return (
		<div className="quiz-list">
			<div className="quiz-item" onClick={() => setShowCreateQuiz(true)}>
				+
			</div>
			{/* Iterate through ever quiz and render QuizItem component for each*/}
			{context.quizList.map((quiz) => (
				<QuizItem quiz={quiz} />
			))}
		</div>
	);
}
