import Login from '../pages/LoginPage'
import Contact from '../pages/ContactPage/ContactPage'
import About from '../pages/AboutPage/AboutPage'
const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Login,
		key: 'Login',
		path: '/'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	}
];

export default routes;
