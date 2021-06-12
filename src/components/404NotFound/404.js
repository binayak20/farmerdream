import React from 'react';
import { useHistory } from 'react-router';

const Pages404 = () => {
	const history = useHistory();
	const navigateToDashboard = () => history.push(`/home`);
	return (
		<>
			<h1>404 not found</h1>
			<button onClick={navigateToDashboard}>Back Home</button>
		</>
	);
};

export default Pages404;
