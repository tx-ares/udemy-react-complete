import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';

function App() {
	return (
		<div className='flex max-h-screen'>
			<Sidebar></Sidebar>
			<Tasks></Tasks>
		</div>
	);
}

export default App;
