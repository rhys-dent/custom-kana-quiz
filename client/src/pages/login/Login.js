import { Redirect } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../Context";

export default function () {
	const message = useRef(null);
	const context = useContext(Context);
	//Check if user is already logged in, if so redirect to home page
	if (context.isAuthenticated) return <Redirect to="/" />;

	//Displays message under submit input for 5 seconds
	function displayMessage(text) {
		message.current.innerText = text;
		setTimeout(() => (message.current.innerText = ""), 5000);
	}

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
		<form onSubmit={submitLoginInfo}>
			<input type="text" name="email" id="" />
			<input type="text" name="password" id="" />
			<input type="submit" value="Login" />
			<label ref={message}></label>
		</form>
	);
}
