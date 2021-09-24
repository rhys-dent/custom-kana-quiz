import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context";

export default function ({ path, exact, children }) {
	const context = useContext(Context);
	return (
		<Route exact={exact} path={path}>
			{context.isAuthenticated ? children : <Redirect to="/login" />}
		</Route>
	);
}
