import { useState } from "react";

export default function ({ label, children }) {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<div>
				<span>{label}</span>
				<button style={{ textAlign: "end" }} onClick={() => setOpen(!open)}>
					{open ? "Close" : "Open"}
				</button>
			</div>
			{open ? children : ""}
		</div>
	);
}
