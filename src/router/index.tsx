import React, { lazy } from "react"
import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
import { Navigate } from "react-router-dom"
const About = lazy(() => import("@/views/About"))
const User = lazy(() => import("@/views/User"))

const withLoadingComponent = (comp: JSX.Element) => (
	<React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
)

const routes = [
	{
		path: "/",
		element: <Navigate to="/home"></Navigate>,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/about",
		element: (
			<React.Suspense fallback={<div>Loading...</div>}>
				<About />
			</React.Suspense>
		),
	},
	{
		path: "/user",
		element: withLoadingComponent(<User />),
	},
]

export default routes
