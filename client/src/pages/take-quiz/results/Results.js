import { useContext, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";
import { Context } from "../../../Context";
import { answerKey } from "../../../kana-data";
export default function () {
	const history = useHistory();
	const context = useContext(Context);
	const { chars, guesses } = context.quiz.current;
	var numCorrect = 0;
	return (
		<div className="centered-page results-page">
			<div className="results">
				<div>Character</div>
				<div>Guess</div>
				<div>Correct Answer</div>
				{chars.map((char, i) => {
					const guess = i < guesses.length ? guesses[i] : "";
					const correctAnswer = answerKey[char];
					const correctGuess = correctAnswer === guess;
					if (correctGuess) numCorrect++;
					const result = [char, guess, correctAnswer];
					return result.map((value) => (
						<div
							className={correctGuess ? "correct-result" : "incorrect-result"}
						>
							{value}
						</div>
					));
				})}
			</div>
			<div>
				Score: {numCorrect}/{chars.length}
			</div>
			<button
				onClick={() => {
					history.push("/");
				}}
			>
				Continue
			</button>
			<button
				onClick={() => {
					context.retakeQuiz();
					history.push("/take-quiz");
				}}
			>
				Try again
			</button>
		</div>
	);
}
