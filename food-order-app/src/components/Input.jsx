export default function Input({ label, id, ...props }) {
	return (
		<p className='control'>
			<label htmlFor={id}>{label}</label>
			<input
				type='text'
				name={id}
				{...props}
				required
			/>
		</p>
	);
}
