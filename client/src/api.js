import axios from "axios";
axios.defaults.withCredentials = true;

export async function login(e) {
	e.preventDefault();
	const email = e.target["email"].value;
	const password = e.target["password"].value;
	console.log(email + " " + password);
	axios.post("/login", { email, password }).then((res) => {
		console.log(res);
		if (res.data.success) {
		}
	});
}
export async function register(e) {
	e.preventDefault();
	const email = e.target["email"].value;
	const password = e.target["password"].value;
	console.log(email + " " + password);
	axios.post("/register", { email, password }).then((res) => {
		console.log(res);
	});
}
export async function isLoggedIn() {
	return axios.get("/login");
}
