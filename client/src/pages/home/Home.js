import CreateQuiz from "./create-quiz/CreateQuiz";
import { useContext, useEffect, useState } from "react";
import QuizItem from "./QuizItem";
import { Context } from "../../Context";

export default function () {
	const context = useContext(Context);
	const [showQuizCreator, setShowQuizCreator] = useState(false);
	useEffect(() => {
		context.updateQuizList();
	}, []);

	return (
		<div>
			{showQuizCreator ? (
				<CreateQuiz setShowQuizCreator={setShowQuizCreator} />
			) : (
				<div>
					<button
						onClick={() => {
							setShowQuizCreator(true);
						}}
					>
						Create a Quiz
					</button>
					<div>
						{context.quizList.map((quiz) => (
							<QuizItem quiz={quiz} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}
