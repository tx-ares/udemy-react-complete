import React from 'react';
import { useState, useCallback } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';

import QUESTIONS from '../data/questions';
import Question from './Question';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	// useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
	// Using this hook prevents the handleSelectAnswer function from being recreated on every render since it in the end is just a function that returns a value.
	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setUserAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	}, []);

	// Additionally, when wrapping a function with useCallback we don't need to name it since the function itself is returned. Name the reference to the useCallback instead.
	const handleSkipAnswer = useCallback(() => {
		handleSelectAnswer(null);
	}, [handleSelectAnswer]);

	if (quizIsComplete) {
		return (
			<div id='summary'>
				<img
					src={quizCompleteImg}
					alt='Trophy'
				/>
				<h2>Quiz Complete!</h2>
				<button
					className='reset-button'
					onClick={() => setUserAnswers([])}>
					Restart Quiz
				</button>
			</div>
		);
	} else {
		return (
			<div id='quiz'>
				<Question
					key={activeQuestionIndex}
					questionIndex={activeQuestionIndex}
					onSkipAnswer={handleSkipAnswer}
					onSelectAnswer={handleSelectAnswer}
				/>
			</div>
		);
	}
};

export default Quiz;
