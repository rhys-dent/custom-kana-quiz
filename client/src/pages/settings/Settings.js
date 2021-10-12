import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
export default function () {
	const context = useContext(Context);
	//Edit user name
	//delete account
	const changeNameField = useRef();
	const currentPassword = useRef();
	const newPassword = useRef();
	const confirmNewPassword = useRef();
	return (
		<div className="settings-page centered-page">
			<h2>Settings</h2>
			<Link to="/">
				<img src="back.png" height="32px" />
			</Link>
			<div>
				<div className="item">
					<h4 className="heading">Change Name</h4>
					<label>New Name</label>
					<input ref={changeNameField} type="text" />
					<input
						type="submit"
						onClick={() => {
							const newName = changeNameField.current.value;
							context.changeName(newName);
						}}
						value="Confirm"
					/>
				</div>
				<div className="item">
					<h4 className="heading">Change Password</h4>
					<label>Current Password</label>
					<input ref={currentPassword} type="password" />
					<label>New Password</label>
					<input ref={newPassword} type="password" />
					<label>Confirm New Password</label>
					<input ref={confirmNewPassword} type="password" />
					<input
						type="submit"
						onClick={() =>
							context.changePassword(
								currentPassword.current.value,
								newPassword.current.value,
								confirmNewPassword.current.value
							)
						}
						value="Confirm Change"
					/>
				</div>
				<div className="item">
					<h4 className="heading">Delete Account</h4>
					<button
						onClick={() => {
							context.deleteUser();
						}}
					>
						Delete Account
					</button>
				</div>
				<br />
			</div>
		</div>
	);
}
