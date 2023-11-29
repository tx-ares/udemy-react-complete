import noProjectImage from '../../assets/no-projects.png';

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className='mt-244 text-center w-2/3'>
			<img
				alt='An empty task list'
				className='w-16 h-16 object-contain mx-auto'
				src={noProjectImage}
			/>
			<h2 className='text-xl font-bold text-stone-500 my-4'>
				No Project Selected
			</h2>
			<p className='text-stone-400 mb-4'>
				Start by adding or selecting a project.
			</p>

			<button
				className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
				onClick={onStartAddProject}>
				Create new project
			</button>
		</div>
	);
}
