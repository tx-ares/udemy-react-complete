import React from 'react';
import { useState } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';

import QUESTIONS from '../data/questions';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	}

	let content = '';

	if (quizIsComplete) {
		return (content = (
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
		));
	} else {
		const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
		shuffledAnswers.sort(() => Math.random() - 0.5);
		return (content = (
			<div id='quiz'>
				<div id='question'>
					<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
					<ul id='answers'>
						{QUESTIONS[activeQuestionIndex].answers.map(
							(answer) => {
								return (
									<li
										key={answer}
										className='answer'>
										<button
											onClick={() =>
												handleSelectAnswer(answer)
											}>
											{answer}
										</button>
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		));
	}

	return { content };
};

export default Quiz;
