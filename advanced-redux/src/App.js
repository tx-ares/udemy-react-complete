import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInital = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: 'pending',
					title: 'sending...',
					message: `Cart data is on its way!`,
				})
			);
			const response = await fetch(
				'https://advanced-redux-react-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: `Cart data sent successfully!`,
				})
			);
		};

		if (isInital) {
			isInital = false;
			return;
		}

		sendCartData().catch((error) => {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: error || 'Sending cart data failed...',
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}

			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
