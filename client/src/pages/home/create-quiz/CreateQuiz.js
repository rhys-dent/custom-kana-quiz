import { useContext, useRef, useState } from "react";
import KanaGrid from "./KanaGrid";
import { Context } from "../../../Context";

export default function ({ setShowQuizCreator }) {
	const context = useContext(Context);
	const [selectedChars, setSelectedChars] = useState([]);
	const quizNameRef = useRef("");
	/**Sends selected kana to the api and adds a quiz in the database
	 *then makes a call to the database to update the client side quiz list
	 */
	function postQuiz() {
		context.createQuiz(quizNameRef.current.value, selectedChars);
	}
	return (
		<div>
			Create A Quiz
			<input ref={quizNameRef} type="text" defaultValue="Enter Name" />
			<KanaGrid
				selectedChars={selectedChars}
				setSelectedChars={setSelectedChars}
			/>
			<button
				onClick={() => {
					postQuiz();
					setShowQuizCreator(false);
				}}
			>
				Create
			</button>
			<button
				onClick={() => {
					setShowQuizCreator(false);
				}}
			>
				Cancel
			</button>
		</div>
	);
}
