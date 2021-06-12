import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Team from '../components/Team/Team';

const privateRoutes = {
	home: {
		path: '/',
		exact: true,
		component: Home,
	},
	team: {
		path: '/team',
		exact: true,
		component: Team,
	},
	contact: {
		path: '/contact',
		exact: true,
		component: Contact,
	},
};

export default privateRoutes;
