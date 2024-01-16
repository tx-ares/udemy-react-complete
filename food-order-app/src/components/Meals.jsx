import MealItem from './MealItem';
import useHttp from '../util/useHttp';

const requestConfig = {};

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (isLoading) {
		return <p>Loading ...</p>;
	}

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
