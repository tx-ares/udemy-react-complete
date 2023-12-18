import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchAvailablePlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import { useEffect } from 'react';

function App() {
	const selectedPlace = useRef();

	const [userPlaces, setUserPlaces] = useState([]);
	const [isFetching, setisFetching] = useState(false);
	const [error, setError] = useState(null);
	const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		async function fetchPlaces() {
			try {
				setisFetching(true);
				const places = await fetchAvailablePlaces();
				setUserPlaces(places);
			} catch (error) {
				setError({
					message: error.message || 'Failed to fetch places.',
				});
			}
		}

		fetchPlaces();
	}, []);

	function handleStartRemovePlace(place) {
		setModalIsOpen(true);
		selectedPlace.current = place;
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false);
	}

	async function handleSelectPlace(selectedPlace) {
		setUserPlaces((prevPickedPlaces) => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = [];
			}
			if (
				prevPickedPlaces.some((place) => place.id === selectedPlace.id)
			) {
				return prevPickedPlaces;
			}
			return [selectedPlace, ...prevPickedPlaces];
		});

		try {
			await updateUserPlaces([selectedPlace, ...userPlaces]);
		} catch (error) {
			setUserPlaces(userPlaces);
			setErrorUpdatingPlaces({
				message: error.message || 'Failed to update places.',
			});
		}
	}

	const handleRemovePlace = useCallback(
		async function handleRemovePlace() {
			setUserPlaces((prevPickedPlaces) =>
				prevPickedPlaces.filter(
					(place) => place.id !== selectedPlace.current.id
				)
			);

			try {
				await updateUserPlaces(
					userPlaces.filter(
						// This will filter our userPlaces array to remove the place that was selected
						(place) => place.id !== selectedPlace.current.id
					)
				);
			} catch (error) {
				// In this "optimisic" approach, we update the UI first, then if the request fails, we revert the UI back to the previous state
				setUserPlaces(userPlaces);
				setErrorUpdatingPlaces({
					message: error.message || 'Failed to delete place.',
				});
			}

			setModalIsOpen(false);
		},
		[userPlaces]
	);

	function handleError() {
		setErrorUpdatingPlaces(null);
	}

	return (
		<>
			<Modal
				open={errorUpdatingPlaces}
				onClose={handleError}>
				{errorUpdatingPlaces && (
					<Error
						title='An error occured while updating places.'
						message={errorUpdatingPlaces.message}
						onConfirm={handleError}></Error>
				)}
			</Modal>
			<Modal
				open={modalIsOpen}
				onClose={handleStopRemovePlace}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img
					src={logoImg}
					alt='Stylized globe'
				/>
				<h1>PlacePicker</h1>
				<p>
					Create your personal collection of places you would like to
					visit or you have visited.
				</p>
			</header>
			<main>
				{error && (
					<Error
						title='An error occured while fetching places.'
						message={error.message}
					/>
				)}
				{!error && (
					<Places
						title="I'd like to visit ..."
						fallbackText='Select the places you would like to visit below.'
						places={userPlaces}
						onSelectPlace={handleStartRemovePlace}
						isFetching={isFetching}
						loadingText='Loading places...'
					/>
				)}

				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	);
}

export default App;
