import React from 'react';
import { useState, useCallback } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';

import QUESTIONS from '../data/questions';
import QuestionTimer from './QuestionTimer';

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
	});

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
		const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
		shuffledAnswers.sort(() => Math.random() - 0.5);
		return (
			<div id='quiz'>
				<div id='question'>
					<QuestionTimer
						key={activeQuestionIndex} // React will rerender this component when the key changes
						timeout={10000}
						onTimeout={handleSkipAnswer}></QuestionTimer>
					<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
					<ul id='answers'>
						{QUESTIONS[activeQuestionIndex].answers.map(
							(answer) => {
								return (
									<li
										key={answer}
										className='answer'>
										<button onClick={handleSelectAnswer}>
											{answer}
										</button>
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		);
	}
};

export default Quiz;
