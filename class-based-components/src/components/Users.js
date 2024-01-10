import { useState, Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

class Users extends Component {
	constructor() {
		super();
		// state is a special property of class-based components.
		// It is always an object, whereas in functional components it can be anything.
		this.state = {
			showUsers: true,
		};
	}

	toggleUsersHandler() {
		// This will merge the old state with the new state.
		// Similiar to expression: this.state = { ...this.state, showUsers: !this.state.showUsers };
		this.setState((currentState) => {
			return { showUsers: !currentState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{DUMMY_USERS.map((user) => (
					<User
						key={user.id}
						name={user.name}
					/>
				))}
			</ul>
		);
		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{this.state.showUsers ? 'Hide' : 'Show'} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// Functional Component
// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// 	const usersList = (
// 		<ul>
// 			{DUMMY_USERS.map((user) => (
// 				<User
// 					key={user.id}
// 					name={user.name}
// 				/>
// 			))}
// 		</ul>
// 	);

// 	return (
// 		<div className={classes.users}>
// 			<button onClick={toggleUsersHandler}>
// 				{showUsers ? 'Hide' : 'Show'} Users
// 			</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

export default Users;
