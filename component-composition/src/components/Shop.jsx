export default function Shop({ children }) {
	return (
		<section id='shop'>
			<h2>Elegant Clothing For Everyone</h2>
			{/* In order to render elements via component composition we must access the children prop */}
			<ul id='products'>{children}</ul>
		</section>
	);
}
