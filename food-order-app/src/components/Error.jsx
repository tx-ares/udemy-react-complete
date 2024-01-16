export default function Error({ title, message }) {
	return (
		<div className='error'>
			<h3>{title}</h3>
			<p>{message}</p>
		</div>
	);
}
