import Login from '../pages/Login'
import Contact from '../pages/Contact'
import About from '../pages/About'
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
