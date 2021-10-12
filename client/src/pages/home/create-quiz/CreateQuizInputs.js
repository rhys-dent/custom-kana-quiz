import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../Context";

export default function ({ setShowCreateQuiz, selectedChars }) {
	const context = useContext(Context);
	const quizNameRef = useRef("");

	return (
		<div className="create-quiz-inputs">
			<div>
				<label>Name</label>
				<input ref={quizNameRef} type="text" />
			</div>

			<div>
				<div
					className="confirm-button"
					onClick={() => {
						context.createQuiz(quizNameRef.current.value, selectedChars);
						setShowCreateQuiz(false);
					}}
				>
					Create
				</div>
				<div
					className="cancel-button"
					onClick={() => {
						setShowCreateQuiz(false);
					}}
				>
					Cancel
				</div>
			</div>
		</div>
	);
}
