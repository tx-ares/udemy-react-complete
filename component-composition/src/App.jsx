import { useState } from 'react';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';

import { CartContext } from './store/shopping-cart-context.jsx';

function App() {
	const [shoppingCart, setShoppingCart] = useState({
		items: [],
	});

	function handleAddItemToCart(id) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];

			const existingCartItemIndex = updatedItems.findIndex(
				(cartItem) => cartItem.id === id
			);
			const existingCartItem = updatedItems[existingCartItemIndex];

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				const product = DUMMY_PRODUCTS.find(
					(product) => product.id === id
				);
				updatedItems.push({
					id: id,
					name: product.title,
					price: product.price,
					quantity: 1,
				});
			}

			return {
				items: updatedItems,
			};
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === productId
			);

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};

			updatedItem.quantity += amount;

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
			};
		});
	}

	const ctxValue = {
		items: shoppingCart.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	return (
		// We can use the CartContext.Provider component to wrap the entire App component. This will allow us to access the CartContext in any component that is a child of the App component.
		// By passing shoppingCart ( The state property ) into the provider's value prop we can access the state in any component that is a child of the App component.
		// Now if I use ctxValue I can not only add items property but also add a function to update the quantity of an item in the cart.
		<CartContext.Provider value={ctxValue}>
			<Header />
			<Shop>
				{/* With component composition, we can insert logic into our Shop component from the App component and removing the need to pass handlers as props. */}
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</CartContext.Provider>
	);
}

export default App;
