import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchPlaces() {
			setIsLoading(true);

			try {
				const places = await fetchAvailablePlaces();

				navigator.geolocation.getCurrentPosition(
					(position) => {
						const sortedPlaces = sortPlacesByDistance(
							places,
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
