import { useContext, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";
import { Context } from "../../../Context";
import { answerKey } from "../../../kana-data";
export default function () {
	const history = useHistory();
	const context = useContext(Context);
	var numCorrect = 0;
	function checkAnswer({ char, answer }) {
		const correct = answerKey[char] ?? answerKey[char];
		numCorrect += (correct && answer === correct) ?? 1;
		return correct;
	}
	const results = context.quiz.current.answers.map((answer) => {
		return { ...answer, correctAnswer: checkAnswer(answer) };
	});
	return (
		<div>
			{results.map((answer) => {
				return (
					<div>
						{answer.char} {answer.answer} {answer.correctAnswer}
					</div>
				);
			})}
			<div>{numCorrect}</div>
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
