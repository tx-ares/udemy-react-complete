import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		async function fetchPlaces() {
			try {
				const response = await fetch('http://localhost:3000/places');
				const responseData = await response.json();
				if (!response.ok) throw new Error(responseData.message);

				navigator.geolocation.getCurrentPosition(
					(position) => {
						const sortedPlaces = sortPlacesByDistance(
							responseData.places,
							position.coords.latitude,
							position.coords.longitude
						);
						setAvailablePlaces(sortedPlaces);
						setIsLoading(false);
					},
					(error) => {}
				);
			} catch (error) {
				setError(error);
				setIsLoading(false);
			}
		}

		fetchPlaces();
	}, []); // Remember that with useEffect, this code only runs if the value of the second argument, ( a dependency changes )
	// This is kind of like how in Angular we control changeDetection strategies by configuring it in the @Component decorator or using a lifecycle hook like ngOnChanges()

	if (error)
		return (
			<Error
				title='an error has occured!'
				message={error.message}></Error>
		);

	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			isLoading={isLoading}
			loadingText='Loading places...'
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}
