import React from "react";
import Gold from "./Gold/Gold";
import CrudeOil from "./CrudeOil/CrudeOil";
import classes from "./Commodities.module.css";

const Commodities = () => {
	return (
		<div className="page pt-4">
			<div className={classes.Commodities}>
				<Gold />
				<CrudeOil />
			</div>
		</div>
	);
};

export default Commodities;
