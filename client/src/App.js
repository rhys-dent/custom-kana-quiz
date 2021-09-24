import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Quiz from "./pages/take-quiz/quiz/Quiz";
import Results from "./pages/take-quiz/results/Results";
import { useContext, useEffect } from "react";
import axios from "axios";
import ProtectedRoute from "./common/ProtectedRoute";
import { Context } from "./Context";

function App() {
	const context = useContext(Context);

	useEffect(() => {
		axios.get("/api/login").then((res) => {
			if (res.data.isLoggedIn) {
				console.log("user logged in");
				context.setIsAuthenticated(true);
			} else {
				console.log("user not logged in");
				context.setIsAuthenticated(false);
			}
		});
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
