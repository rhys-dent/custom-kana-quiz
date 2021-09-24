import { Redirect } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../Context";

export default function ({ setUser }) {
	const message = useRef(null);
	const context = useContext(Context);
	//Check if user is already logged in, if so redirect to home page
	if (context.isAuthenticated) {
		return <Redirect to="/" />;
	}

	//Displays message under submit input for 5 seconds
	function displayMessage(text) {
		message.current.innerText = text;
		setTimeout(() => (message.current.innerText = ""), 5000);
	}

	//Sends a post request with email and password to backend
	async function login(e) {
		e.preventDefault();
		//obtain values from form
		const email = e.target["email"].value;
		const password = e.target["password"].value;
		//the request
		axios.post("/api/login", { email, password }).then((res) => {
			//the response will be the user's data if login is successful
			if (res.data.success) {
				localStorage.setItem("isAuthenticated", "true");
				context.setIsAuthenticated(true);
			}
			//if fail, then the reason is displayed to the user
			else {
				displayMessage(res.data.message);
			}
		});
	}

	return (
		<form onSubmit={login}>
			<input type="text" name="email" id="" />
			<input type="text" name="password" id="" />
			<input type="submit" value="Login" />
			<label ref={message}></label>
		</form>
	);
}
