import React, { Component } from "react";
import Chart from "react-apexcharts";
import moment from "moment";
import { readString } from "react-papaparse";
import getHistoricalDataURL from "./API";
import classes from "./Graph.module.css";

class Graph extends Component {
	state = {
		loaded: false,
		interval: this.props.interval,
		series: [
			{
				name: this.props.symbol,
				data: null,
			},
		],
		options: {
			title: {
				text: this.props.symbol,
				align: "left",
			},
			chart: {
				type: "area",
				stacked: false,
				height: "auto",
				zoom: {
					type: "x",
					enabled: true,
					autoScaleYaxis: true,
				},
				toolbar: {
					autoSelected: "zoom",
				},
			},
			stroke: {
				width: 1.5,
				curve: "straight",
			},
			markers: {
				size: 0,
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				type: "datetime",
				labels: {
					format: "d MMM yyyy",
				},
				tickPlacement: "on",
			},
			yaxis: {
				title: {
					text: "Price",
				},
				labels: {
					formatter: function (val) {
						return val.toFixed(2);
					},
				},
			},
			tooltip: {
				shared: false,
				x: {
					format: "d MMM yyyy",
				},
				y: {
					formatter: function (val) {
						return val.toFixed(2);
					},
				},
			},
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.5,
					opacityTo: 0,
					stops: [0, 90, 100],
				},
			},
		},
	};

	openPopupWindow = (url) => {
		window.open(
			url,
			"",
			`toolbar=no,status=no,menubar=no,location=center,width=${window.innerWidth},height=${window.innerHeight}`
		);
	};

	loadHandler = async () => {
		if (document.getElementById("graphs")) {
			const period_begin = moment()
				.subtract(this.state.interval.value, this.state.interval.unit)
				.format("X");
			const period_end = moment().format("X");

			const dataURL = getHistoricalDataURL(
				this.props.symbol,
				period_begin,
				period_end
			);

			if (!dataURL) {
				return;
			}

			const res = await fetch(dataURL);
			const json = await res.json();

			const raw = readString(json.contents).data;
			const data = raw.map((dat) => {
				return { x: new Date(dat[0]), y: parseFloat(dat[4]) };
			});

			// Remove row header
			data.shift();

			if (document.getElementById("graphs")) {
				this.setState({
					loaded: true,
					series: [
						{
							name: this.props.symbol,
							data,
						},
					],
				});
			}
		}
	};

	componentDidMount() {
		setTimeout(this.loadHandler, this.props.index * 50);
	}

	componentDidUpdate() {
		if (
			this.props.interval.value !== this.state.interval.value ||
			this.props.interval.unit !== this.state.interval.unit
		) {
			setTimeout(this.loadHandler, this.props.index * 50);
			this.setState({
				loaded: false,
				interval: { ...this.props.interval },
			});
		}
	}

	render() {
		const content = this.state.loaded ? (
			<Chart
				type="area"
				series={this.state.series}
				options={this.state.options}
				height={250}
			/>
		) : (
			<div className={classes.loader}></div>
		);

		return (
			<div className={classes.Graph}>
				<div
					id={this.props.symbol}
					onDoubleClick={() => {
						this.openPopupWindow(
							`https://www.settrade.com/C04_01_stock_quote_p1.jsp?txtSymbol=${this.props.symbol}`
						);
					}}
					onContextMenu={(event) => {
						event.preventDefault();
						this.openPopupWindow(
							`https://finance.yahoo.com/chart/${this.props.symbol}.BK`
						);
					}}
				>
					{content}
				</div>
			</div>
		);
	}
}

export default Graph;
