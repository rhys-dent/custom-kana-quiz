import { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";

export default function () {
	const context = useContext(Context);
	const messageRef = useRef();

	return (
		<div
			ref={messageRef}
			style={{
				overflow: "hidden",
				display: context.message ? "block" : "none",
			}}
		>
			<div> {context.message}</div>
			<button onClick={() => (messageRef.current.style.display = "none")}>
				Close
			</button>
		</div>
	);
}
