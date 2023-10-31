import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
	return (
		<>
			<Player />
			<div id='challenges'>
				<TimerChallenge
					title="Don't hurt me"
					targetTime={1}></TimerChallenge>
				<TimerChallenge
					title='Hurt me plenty'
					targetTime={5}></TimerChallenge>
				<TimerChallenge
					title='Ultra Violence'
					targetTime={10}></TimerChallenge>
				<TimerChallenge
					title='Nightmare'
					targetTime={15}></TimerChallenge>
			</div>
		</>
	);
}

export default App;
