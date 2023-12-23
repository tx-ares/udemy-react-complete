import { useRouter } from 'next/router';

// our-domain.com/details

function DetailsPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	return <h1>The Details page</h1>;
}

export default DetailsPage;
