import React from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../data/questions';

const Summary = ({ userAnswers, onReset }) => {
	const skippedAnswers = userAnswers.filter((answer) => answer === null);
	const correctAnswers = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	);
	const skippedAnswersPercentage = Math.round(
		(skippedAnswers.length / userAnswers.length) * 100
	);
	const correctAnswersPercentage = Math.round(
		(correctAnswers.length / userAnswers.length) * 100
	);
	return (
		<div id='summary'>
			<img
				src={quizCompleteImg}
				alt='Trophy'
			/>
			<h2>Quiz Complete!</h2>
			<div id='summary-stats'>
				<p>
					<span className='number'>{skippedAnswersPercentage}%</span>
					<span className='text'>Skipped</span>
				</p>
				<p>
					<span className='number'>{correctAnswersPercentage}%</span>
					<span className='text'>Correct Answers:</span>
				</p>
			</div>

			<ol>
				{userAnswers.map((answer, index) => {
					let classes = 'user-answer';

					if (answer === null) {
						classes += ' skipped';
					} else if (answer === QUESTIONS[index].answers[0]) {
						classes += ' correct';
					} else {
						classes += ' wrong';
					}
					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className='question'>{QUESTIONS[index].text}</p>
							<p className={classes}>{answer ?? 'Skipped'}</p>
						</li>
					);
				})}
			</ol>
			<button
				className='reset-button'
				onClick={() => onReset([])}>
				Restart Quiz
			</button>
		</div>
	);
};

export default Summary;
