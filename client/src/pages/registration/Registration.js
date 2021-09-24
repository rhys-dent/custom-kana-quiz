import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function () {
	const history = useHistory();
	const message = useRef(null);
	function displayMessage(text) {
		message.current.innerText = text;
		setTimeout(() => (message.current.innerText = ""), 5000);
	}
	async function register(e) {
		e.preventDefault();
		//obtain info from form
		const email = e.target["email"].value;
		const password = e.target["password"].value;
		const confirmPassword = e.target["confirm-password"].value;
		//check that passwords match
		if (password !== confirmPassword)
			return displayMessage("Password's must match");
		//send email and password to backend
		axios.post("/api/register", { email, password }).then((res) => {
			//if successfull response is received, redirect user to login page
			if (res.data.success) {
				history.push("/login");
			}
			console.log(res.data.message);
		});
	}
	return (
		<form onSubmit={register}>
			<input type="text" name="email" id="" />
			<input type="text" name="name" id="" />
			<input type="text" name="password" id="" />
			<input type="text" name="confirm-password" id="" />
			<input type="submit" value="Login" />
			<label ref={message}></label>
		</form>
	);
}
