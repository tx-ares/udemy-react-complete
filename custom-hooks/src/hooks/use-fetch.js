import { useEffect, useState } from 'react';

// Hooks should start with 'use'. This is a convention that tells React that this function is a hook and should be treated as such.
export function useFetch(fetchFn, initalValue) {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState(null);
	const [fetchedData, setFetchedData] = useState(initalValue);

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			try {
				const data = await fetchFn();
				setFetchedData(data);
			} catch (error) {
				setError({
					message: error.message || 'Failed to fetch data.',
				});
			}

			setIsFetching(false);
		}

		fetchData();
	}, [fetchFn]);

	return { isFetching, error, fetchedData };
}
