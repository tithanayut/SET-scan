import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import classes from "./Gold.module.css";

const Gold = () => {
	const style = {
		width: "auto",
		height: 440,
		symbol: "TVC:GOLD",
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
		<div className={classes.Gold}>
			<TradingViewWidget {...style} />
		</div>
	);
};

export default Gold;
