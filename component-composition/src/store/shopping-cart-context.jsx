import { createContext, useReducer, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

// This context API workflow seems similar to Angular's dependency injection and the use of services to provide shared data to components
export const CartContext = createContext({
	items: [],
	addItemToCart: () => {}, // This may seem weird but I can add a function here that does nothing so that I can use the context in any component that is a child of the App component and get autocompletion this function
	updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
	return state;
}

export default function CartContextProvider({ children }) {
	const [shoppingCartState, shoppingCartDispatch] = useReducer(
		shoppingCartReducer,
		{ items: [] }
	);

	// Okay, now this is almost exactly like Angular's dependency injection and the use of services to provide shared data to components. Children of the wrapped component can access these functions and data by accessing the children property of the context object.
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

	// Remember that this context provider is just a custom component which contains all our provider data and functions.  We still need to return it to render it just like any other component
	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
}
