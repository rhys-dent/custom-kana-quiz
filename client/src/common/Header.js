import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
export default function ({ setHeaderHeight }) {
	const context = useContext(Context);
	const headerRef = useRef();
	useEffect(() => {
		const headerHeight = headerRef.current.getBoundingClientRect().height;

		setHeaderHeight(headerHeight);
	});
	return (
		<header ref={headerRef}>
			<div className="logo">Kana Quiz</div>
			<nav>
				<div>{context.isAuthenticated ?? context.isAuthenticated}</div>
				<Link to="/settings">
					<img src="settings.png" height="32px" />
				</Link>
				<Link to="/">
					<img
						src="logout.png"
						height="32px"
						onClick={() => {
							context.logout();
						}}
					/>
				</Link>
			</nav>
		</header>
	);
}
