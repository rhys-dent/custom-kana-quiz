import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/registration/Registration";
import Quiz from "./pages/take-quiz/quiz/Quiz";
import Results from "./pages/take-quiz/results/Results";
import Settings from "./pages/settings/Settings";
import Message from "./common/Message";
import { useContext, useEffect, useRef, useState } from "react";

import ProtectedRoute from "./common/ProtectedRoute";
import { Context } from "./Context";

function App() {
	const context = useContext(Context);
	const [headerHeight, setHeaderHeight] = useState(0);
	const mainRef = useRef();
	useEffect(() => {
		context.loginCheck();
	}, []);

	return (
		<div>
			<Router>
				<Header setHeaderHeight={setHeaderHeight} />
				<Message />
				<main
					ref={mainRef}
					style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
				>
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
						<ProtectedRoute exact={true} path="/settings">
							<Settings />
						</ProtectedRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/registration" component={Registration} />
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
