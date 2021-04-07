import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import classes from "./CrudeOil.module.css";

const CrudeOil = () => {
	const style = {
		width: "auto",
		height: 440,
		symbol: "OIL_CRUDE",
		range: "3m",
		interval: "D",
		timezone: "Asia/Bangkok",
		theme: "Light",
		style: "2",
		locale: "en",
		toolbar_bg: "#f1f3f6",
		enable_publishing: false,
		hide_top_toolbar: true,
		withdateranges: true,
		allow_symbol_change: false,
		save_image: false,
	};

	return (
		<div className={classes.CrudeOil}>
			<TradingViewWidget {...style} />
		</div>
	);
};

export default CrudeOil;
