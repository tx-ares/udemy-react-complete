import React from 'react';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTIONS from '../data/questions';
import { useState } from 'react';

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null,
	});

	function handleSelectAnswer(answer) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
			});

			setTimeout(() => {
				onSelectAnswer(answer);
			}, 2000);
		}, 1000);
	}

	let answerState = '';

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id='question'>
			<QuestionTimer
				timeout={10000}
				onTimeout={onSkipAnswer}></QuestionTimer>
			<h2>{QUESTIONS[questionIndex].text}</h2>
			<Answers
				answers={QUESTIONS[questionIndex].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}></Answers>
		</div>
	);
};

export default Question;
