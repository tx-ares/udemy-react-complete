import { useEffect, useState } from 'react';
import MealItem from './MealItem';

export default function Meals() {
	const [loadedMeals, setloadedMeals] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			const response = await fetch('http://localhost:3000/meals');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const meals = await response.json();
			setloadedMeals(meals);
			console.log(loadedMeals);
		}

		fetchMeals();
	}, []);

	return (
		<ul id='meals'>
			{loadedMeals.map((meal, i) => (
				<MealItem
					key={i}
					meal={meal}></MealItem>
			))}
		</ul>
	);
}
