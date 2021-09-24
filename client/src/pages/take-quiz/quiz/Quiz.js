import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../Context";

export default function () {
	const history = useHistory();
	const { quiz } = useContext(Context);
	const { answers, name, chars } = quiz.current;

	const [currentChar, setCurrentChar] = useState("");

	function displayNextChar() {}
	useEffect(() => {
		setCurrentChar(chars.shift());
	}, []);

	return (
		<div>
			<h2>{quiz.current.name}</h2>
			<div>{chars}</div>
			<h3>{currentChar}</h3>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					quiz.current.answers.push({
						char: currentChar,
						answer: e.target["answer"].value,
					});
					if (chars.length > 0) {
						setCurrentChar(chars.shift());
					} else {
						history.push("/results");
					}
				}}
			>
				<input type="text" name="" id="answer" />
				<input type="submit" value="Submit" />
			</form>
			<div>{answers.map((answer) => answer.answer)}</div>
		</div>
	);
}
