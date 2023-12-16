import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
const storedPlaces = storedIds.map((id) =>
	AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
	const selectedPlace = useRef();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

	useEffect(() => {
		// This is a side effect. It will be executed after the first render if it wasn't inside a useEffect hook.
		// To prevent an infinite loop, we moved this effect inside a useEffect hook so that it is only called once.
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				AVAILABLE_PLACES,
				position.coords.latitute,
				position.coords.longitude
			);

			setAvailablePlaces(sortedPlaces);
		});
	}, []);

	function handleStartRemovePlace(id) {
		setModalIsOpen(true);
		selectedPlace.current = id;
	}

	function handleStopRemovePlace() {
		setModalIsOpen;
	}

	function handleSelectPlace(id) {
		setPickedPlaces((prevPickedPlaces) => {
			if (prevPickedPlaces.some((place) => place.id === id)) {
				return prevPickedPlaces;
			}
			const place = AVAILABLE_PLACES.find((place) => place.id === id);
			return [place, ...prevPickedPlaces];
		});

		const storedIds =
			JSON.parse(localStorage.getItem('pickedPlaces')) || [];
		if (storedIds.indexOf(id) === -1) {
			// If the id is not already in the array, add it to the local storage.
			localStorage.setItem(
				'pickedPlaces',
				JSON.stringify([id, ...storedIds])
			);
		}
	}

	function handleRemovePlace() {
		setPickedPlaces((prevPickedPlaces) =>
			prevPickedPlaces.filter(
				(place) => place.id !== selectedPlace.current
			)
		);
		setModalIsOpen(false);

		const storedIds =
			JSON.parse(localStorage.getItem('pickedPlaces')) || [];
		localStorage.setItem(
			'pickedPlaces',
			JSON.stringify(
				storedIds.filter((id) => id !== selectedPlace.current)
			)
		);
	}

	return (
		<>
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
				<Places
					title="I'd like to visit ..."
					fallbackText={
						'Select the places you would like to visit below.'
					}
					places={pickedPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>
				<Places
					title='Available Places'
					places={availablePlaces}
					fallbackText='Sorting places by distance...'
					onSelectPlace={handleSelectPlace}
				/>
			</main>
		</>
	);
}

export default App;
