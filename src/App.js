import React from 'react';
import { Outlet } from 'react-router';
import './assets/components/NavMenu/nav.css';
import { NavMenu } from './components/NavMenu/NavMenu';
import { Footer } from './components/Footer/Footer';

function App() {
	return (<>
		<NavMenu />
		<Outlet />
		<Footer />
	</>
	);
}

export default App;
