export default function ({ char, isSelected }) {
	if (isSelected) console.log("selected");
	return (
		<span
			style={{
				display: "inline-block",
				width: "20%",
				textAlign: "center",
				color: isSelected ? "blue" : "black",
			}}
		>
			{char}
		</span>
	);
}
