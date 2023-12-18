import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);

	useEffect(() => {
		// fetch() is a browser API for making HTTP requests
		fetch('http://localhost:3000/places')
			.then((response) => {
				// response.json() returns a promise
				return response.json();
			})
			.then((responseData) => {
				setAvailablePlaces(responseData.places);
			});
	}, []); // Remember that with useEffect, this code only runs if the value of the second argument, ( a dependency changes )
	// This is kind of like how in Angular we control changeDetection strategies by configuring it in the @Component decorator or using a lifecycle hook like ngOnChanges()

	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}
