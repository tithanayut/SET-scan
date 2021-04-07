import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import classes from "./Currency.module.css";

const Currency = () => {
	const style = {
		width: "auto",
		height: 440,
		symbol: "OANDA:USDTHB",
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
		allow_symbol_change: true,
		save_image: false,
	};

	return (
		<div className="container pt-4">
			<div className={classes.Currency}>
				<TradingViewWidget {...style} />
			</div>
		</div>
	);
};

export default Currency;
