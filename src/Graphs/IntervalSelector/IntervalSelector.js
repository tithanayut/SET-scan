import React from "react";

const IntervalSelector = (props) => {
	const btnStyle =
		props.interval.value === props.selected.value &&
		props.interval.unit === props.selected.unit
			? "btn-warning"
			: "btn-primary";

	return (
		<button
			type="button"
			className={["btn", "btn-sm", "mr-2", btnStyle].join(" ")}
			onClick={() =>
				props.clicked(props.interval.value, props.interval.unit)
			}
		>
			{props.interval.display}
		</button>
	);
};

export default IntervalSelector;
