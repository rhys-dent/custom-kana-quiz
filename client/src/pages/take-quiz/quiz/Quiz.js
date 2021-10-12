import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../Context";

export default function () {
	const history = useHistory();
	const { quiz } = useContext(Context);
	const { guesses, name, unguessedChars } = quiz.current;
	const currentGuess = useRef();
	const [currentChar, setCurrentChar] = useState("");

	function displayNextChar() {}
	useEffect(() => {
		setCurrentChar(unguessedChars.shift());
		currentGuess.current.focus();
	}, []);

	return (
		<div className="take-quiz-page">
			<h2 className="quiz-name">{name}</h2>
			<div className="the-quiz">
				<div className="unguessed-chars">Remaining: {unguessedChars}</div>
				<h3 className="current-kana">{currentChar}</h3>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						guesses.push(currentGuess.current.value);
						currentGuess.current.value = "";
						currentGuess.current.focus();
						if (unguessedChars.length > 0) {
							setCurrentChar(unguessedChars.shift());
						} else {
							history.push("/results");
						}
					}}
				>
					<input
						type="text"
						name=""
						id="answer"
						autoComplete="off"
						ref={currentGuess}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>

			<button
				onClick={() => {
					history.push("/results");
				}}
			>
				End Quiz
			</button>
		</div>
	);
}
