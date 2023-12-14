import { createContext } from 'react';

// This context API workflow seems similar to Angular's dependency injection and the use of services to provide shared data to components
export const CartContext = createContext({
	items: [],
	addItemToCart: () => {}, // This may seem weird but I can add a function here that does nothing so that I can use the context in any component that is a child of the App component and get autocompletion this function
	updateItemQuantity: () => {},
});
