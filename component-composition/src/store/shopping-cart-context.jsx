import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

// This context API workflow seems similar to Angular's dependency injection and the use of services to provide shared data to components
export const CartContext = createContext({
	items: [],
	addItemToCart: () => {}, // This may seem weird but I can add a function here that does nothing so that I can use the context in any component that is a child of the App component and get autocompletion this function
	updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = [...state.items];

		const existingCartItemIndex = updatedItems.findIndex(
			(cartItem) => cartItem.id === action.payload
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
				(product) => product.id === action.payload
			);
			updatedItems.push({
				id: action.payload,
				name: product.title,
				price: product.price,
				quantity: 1,
			});
		}

		return {
			/// ...state, // This is not necessary as we are only updating the items property of the state object
			items: updatedItems,
		};
	}

	if (action.type === 'UPDATE_ITEM_QUANTITY') {
		const updatedItems = [...state.items];
		const updatedItemIndex = updatedItems.findIndex(
			(item) => item.id === action.payload.productId
		);

		const updatedItem = {
			...updatedItems[updatedItemIndex],
		};

		updatedItem.quantity += action.payload.amount;

		if (updatedItem.quantity <= 0) {
			updatedItems.splice(updatedItemIndex, 1);
		} else {
			updatedItems[updatedItemIndex] = updatedItem;
		}

		return {
			...state, // This is unnecessary as we are updating the items property of the state object
			items: updatedItems,
		};
	}

	return state;
}

export default function CartContextProvider({ children }) {
	const [shoppingCartState, shoppingCartDispatch] = useReducer(
		shoppingCartReducer,
		{ items: [] }
	);

	// Okay, now this is almost exactly like Angular's dependency injection and the use of services to provide shared data to components. Children of the wrapped component can access these functions and data by accessing the children property of the context object.
	// const [shoppingCart, setShoppingCart] = useState({
	// 	items: [],
	// });

	function handleAddItemToCart(id) {
		// The reducer -> dispatch -> action workflow is similar to Angular's NgRx pattern of reducer -> action -> dispatch.
		// The reducer is a pure function that takes the current state and an action and returns a new state.
		// The dispatch function is used to send an action to the reducer.The action is an object that describes the action to be performed on the state.
		// The reducer then returns a new state based on the action.
		shoppingCartDispatch({ type: 'ADD_ITEM', payload: id });
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		shoppingCartDispatch({
			type: 'UPDATE_ITEM_QUANTITY',
			payload: { productId, amount },
		});
	}

	const ctxValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	// Remember that this context provider is just a custom component which contains all our provider data and functions.  We still need to return it to render it just like any other component
	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
}
