import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../../Context";

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
		const password = e.target["password"].value;
		const confirmPassword = e.target["confirm-password"].value;
		//check that passwords match
		if (password !== confirmPassword)
			return displayMessage("Password's must match");
		//send email and password to backend
		context.register(email, password);
	}
	return (
		<form onSubmit={submitRegistrationInfo}>
			<input type="text" name="email" id="" />
			<input type="text" name="name" id="" />
			<input type="text" name="password" id="" />
			<input type="text" name="confirm-password" id="" />
			<input type="submit" value="Login" />
			<label ref={message}></label>
		</form>
	);
}
