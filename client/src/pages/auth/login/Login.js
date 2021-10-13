import { Redirect, useHistory, Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../../Context";

export default function () {
	const history = useHistory();
	const message = useRef(null);
	const context = useContext(Context);

	//Check if user is already logged in, if so redirect to home page
	if (context.isAuthenticated) return <Redirect to="/" />;

	//Sends a post request with email and password to backend
	async function submitLoginInfo(e) {
		e.preventDefault();
		//obtain values from form
		const email = e.target["email"].value;
		const password = e.target["password"].value;
		//the request
		context.login(email, password);
	}

	return (
		<form className="auth-form centered-page" onSubmit={submitLoginInfo}>
			<label>Email</label>
			<input type="text" name="email" id="" />
			<label>Password</label>
			<input type="text" name="password" id="" />
			<input type="submit" value="Login" />
			<label ref={message}></label>
			<Link to="/registration">Register a new account</Link>
		</form>
	);
}
