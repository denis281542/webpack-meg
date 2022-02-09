import React from 'react'
import { Outlet } from 'react-router'
import '../components/NavMenu/nav.css'
import { NavMenu } from "./NavMenu/NavMenu"
import { Footer } from "./Footer/Footer"

export const Layout = () => {
	return(<>
		<NavMenu />
		<Outlet />
		<Footer />
	</>
	)
}
