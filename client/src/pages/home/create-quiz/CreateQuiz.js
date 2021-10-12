import { useContext, useRef, useState } from "react";
import KanaGrid from "./KanaGrid2";
import CreateQuizInputs from "./CreateQuizInputs";
import { Context } from "../../../Context";

export default function ({ setShowCreateQuiz }) {
	const context = useContext(Context);
	const [selectedChars, setSelectedChars] = useState([]);
	const [headerHeight, setHeaderHeight] = useState();

	function toggleSelectedChar(selectedChar) {
		if (selectedChars.includes(selectedChar))
			setSelectedChars(selectedChars.filter((char) => char != selectedChar));
		else setSelectedChars([...selectedChars, selectedChar]);
	}
	/**Sends selected kana to the api and adds a quiz in the database
	 *then makes a call to the database to update the client side quiz list
	 */

	return (
		<div className="create-quiz-page page">
			<div className="create-quiz-header">
				<h2>Create A Quiz</h2>
				<p>
					Enter a name and select the kana characters you want for your new
					quiz.
				</p>
			</div>

			<CreateQuizInputs
				setShowCreateQuiz={setShowCreateQuiz}
				selectedChars={selectedChars}
				setHeaderHeight={setHeaderHeight}
			/>
			<KanaGrid
				selectedChars={selectedChars}
				setSelectedChars={setSelectedChars}
				toggleSelectedChar={toggleSelectedChar}
				headerHeight={headerHeight}
			/>
		</div>
	);
}
