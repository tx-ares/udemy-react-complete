import React from 'react';
import { useState } from 'react';

import QUESTIONS from '../data/questions';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	}

	return (
		<div id='quiz'>
			<div id='question'>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{QUESTIONS[activeQuestionIndex].answers.map((answer) => {
						return (
							<li
								key={answer}
								className='answer'>
								<button
									onClick={() => handleSelectAnswer(answer)}>
									{answer}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Quiz;
