import CreateQuiz from "./create-quiz/CreateQuiz";
import QuizList from "./quiz-list/QuizList";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
/** Displays a list of quizzes created by the user as well as the option to create a new quiz */
export default function () {
	const context = useContext(Context);
	const [show, setShowCreateQuiz] = useState(false);
	useEffect(() => {
		context.updateQuizList();
	}, []);
	return (
		<div>
			{show ? (
				<CreateQuiz setShowCreateQuiz={setShowCreateQuiz} />
			) : (
				<QuizList setShowCreateQuiz={setShowCreateQuiz} />
			)}
		</div>
	);
}
