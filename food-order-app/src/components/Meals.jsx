import MealItem from './MealItem';
import useHttp from '../util/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (isLoading) {
		return <p className='center'>Loading ...</p>;
	}

	if (error) {
		return (
			<Error
				title='Failed to fetch meals.'
				message={error}></Error>
		);
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
