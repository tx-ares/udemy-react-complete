import logo from '../assets/logo.png';
import styles from './Header.module.css';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export default function Header() {
	return (
		<StyledHeader>
			<img
				src={logo}
				alt='A canvas'
			/>
			<h1>ReactArt</h1>
			<p className={styles.paragraph}>
				A community of artists and art-lovers.
			</p>
		</StyledHeader>
	);
}
