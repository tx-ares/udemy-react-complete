import React from 'react';
import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}
	return (
		<ul id='answers'>
			{shuffledAnswers.current.map((answer) => {
				const isSelected = selectedAnswer === answer;
				let buttonClasses = '';

				if (answerState === 'answered' && isSelected) {
					buttonClasses = 'selected';
				}

				if (
					(answerState === 'correct' || answerState === 'wrong') &&
					isSelected
				) {
					buttonClasses = answerState;
				}
				return (
					<li
						key={answer}
						className='answer'>
						<button
							onClick={() => onSelect(answer)}
							className={buttonClasses}
							disabled={answerState !== ''}>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
