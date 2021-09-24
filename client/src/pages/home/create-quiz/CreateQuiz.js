import { useRef, useState } from "react";
import axios from "axios";
import KanaGrid from "./KanaGrid";

export default function ({ getQuizzes }) {
	const [selectedChars, setSelectedChars] = useState([]);
	const quizNameRef = useRef("");
	/**Sends selected kana to the api and adds a quiz in the database
	 *then makes a call to the database to update the client side quiz list
	 */
	function postQuiz() {
		axios
			.post("/api/quizzes", {
				name: quizNameRef.current.value,
				chars: selectedChars,
			})
			.then((res) => {
				if (res.data.success) {
					console.log("Quiz Added Successfully");
					getQuizzes();
				}
			});
	}
	return (
		<div>
			Create A Quiz
			<input ref={quizNameRef} type="text" defaultValue="Enter Name" />
			<KanaGrid
				selectedChars={selectedChars}
				setSelectedChars={setSelectedChars}
			/>
			<button onClick={postQuiz}>Create</button>
		</div>
	);
}
