import { CartContext } from '../store/shopping-cart-context';
import { useContext } from 'react';

export default function Cart({ onUpdateItemQuantity }) {
	// const cartCtx = useContext(CartContext); // This is fine to use to be specific about the context we are referring to in this component, but means we have to use cartCtx.items.length instead of just items.length
	const { items } = useContext(CartContext); // Destructuring the items property from the context object means we can use items.length instead of items.length meaning less code to write overall

	const totalPrice = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

	return (
		<div id='cart'>
			{items.length === 0 && <p>No items in cart!</p>}
			{items.length > 0 && (
				<ul id='cart-items'>
					{items.map((item) => {
						const formattedPrice = `$${item.price.toFixed(2)}`;

						return (
							<li key={item.id}>
								<div>
									<span>{item.name}</span>
									<span> ({formattedPrice})</span>
								</div>
								<div className='cart-item-actions'>
									<button
										onClick={() =>
											onUpdateItemQuantity(item.id, -1)
										}>
										-
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() =>
											onUpdateItemQuantity(item.id, 1)
										}>
										+
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			)}
			<p id='cart-total-price'>
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
