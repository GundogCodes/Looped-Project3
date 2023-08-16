import { useState } from 'react';
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar';
export default function Contact(props) {
	return(
		<div className="ContactPage">
			<NavBar routes ={routes}/>
		</div>
	) 
}
