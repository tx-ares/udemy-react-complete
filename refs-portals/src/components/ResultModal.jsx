export default function ResultModal({ result, targetTime }) {
	return (
		<dialog className='result-modal'>
			<h2>You {result}!</h2>
			<p>
				The target time was <strong>{targetTime}</strong> seconds.
			</p>
			<p>
				You stopped the timer with <strong>{targetTime}</strong> seconds
				left.
			</p>
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>
	);
}
