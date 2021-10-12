import { useContext, useEffect } from "react";
import { Context } from "../../../Context";

export default function ({ char, isSelected, isHeading, toggleSelectedChar }) {
	const { tileWidth } = useContext(Context);

	return (
		<div
			className={
				isSelected
					? "kana-grid-tile-selected"
					: isHeading || !char
					? "kana-grid-heading"
					: "kana-grid-tile"
			}
			style={{
				"--height": tileWidth + "px",
			}}
			onClick={(e) => {
				const selectedChar = e.target.innerText;
				if (!isHeading) toggleSelectedChar(selectedChar);
			}}
		>
			{char}
		</div>
	);
}
