import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';

import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
	return (
		// We can use the CartContext.Provider component to wrap the entire App component. This will allow us to access the CartContext in any component that is a child of the App component.
		// By passing shoppingCart ( The state property ) into the provider's value prop we can access the state in any component that is a child of the App component.
		// Now if I use ctxValue I can not only add items property but also add a function to update the quantity of an item in the cart.
		<CartContextProvider>
			{/* And now, as CartContextProvider has been made into a custom component, it is acting as our provider wrapper which contains all needed / shared data from our app comp to its children component, giving access to all shared data while also maintaining a lean App component for rendering elements and the context component to contain our business logic */}
			<Header />
			<Shop>
				{/* With component composition, we can insert logic into our Shop component from the App component and removing the need to pass handlers as props. */}
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</CartContextProvider>
	);
}

export default App;
