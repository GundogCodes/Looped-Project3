import NavBar from '../components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

export default function AppRouter(){
	return (
		<Router>
			<NavBar routes={routes} />	
			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={<Component page={key} />}
					></Route>
				))}
			</Routes>
		</Router>
	);
};

