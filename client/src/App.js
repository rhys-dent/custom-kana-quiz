import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Quiz from "./pages/take-quiz/quiz/Quiz";
import Results from "./pages/take-quiz/results/Results";
import { useContext, useEffect, useLayoutEffect } from "react";

import ProtectedRoute from "./common/ProtectedRoute";
import { Context } from "./Context";

function App() {
	const context = useContext(Context);
	console.log(context.isAuthenticated);
	useLayoutEffect(() => {
		context.loginCheck();
	}, []);
	return (
		<div>
			<Router>
				<Switch>
					<ProtectedRoute exact={true} path="/">
						<Home />
					</ProtectedRoute>
					<ProtectedRoute exact={true} path="/take-quiz">
						<Quiz />
					</ProtectedRoute>
					<ProtectedRoute exact={true} path="/results">
						<Results />
					</ProtectedRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/registration" component={Registration} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
