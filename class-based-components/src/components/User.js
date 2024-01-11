import classes from './User.module.css';
import { Component } from 'react';

// Class based component
class User extends Component {
	componentWillUnmount() {
		// This is similar to Angular's ngOnDestroy() lifecycle hook.
		console.log('User unmounted!');
	}

	render() {
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

// Functional component
// const User = (props) => {
// 	return <li className={classes.user}>{props.name}</li>;
// };

export default User;
