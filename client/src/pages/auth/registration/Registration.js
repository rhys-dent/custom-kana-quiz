import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../Context";
import { Redirect } from "react-router-dom";

export default function () {
	const history = useHistory();
	const context = useContext(Context);
	const message = useRef(null);
	function displayMessage(text) {
		message.current.innerText = text;
		setTimeout(() => (message.current.innerText = ""), 5000);
	}
	async function submitRegistrationInfo(e) {
		e.preventDefault();
		//obtain info from form
		const email = e.target["email"].value;
		const name = e.target["name"].value;
		const password = e.target["password"].value;
		const confirmPassword = e.target["confirm-password"].value;

		//check that passwords match
		if (password !== confirmPassword)
			return displayMessage("Password's must match");
		//send email and password to backend
		context.register(email, name, password);
	}
	return context.isAuthenticated ? (
		<Redirect to="/" />
	) : (
		<form className="auth-form centered-page" onSubmit={submitRegistrationInfo}>
			<label>Email</label>
			<input type="text" name="email" id="" />
			<label>Name</label>
			<input type="text" name="name" id="" />
			<label>Password</label>
			<input type="text" name="password" id="" />
			<label>Confirm Password</label>
			<input type="text" name="confirm-password" id="" />
			<input type="submit" value="Register" />
		</form>
	);
}
