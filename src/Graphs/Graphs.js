import React, { Component, Fragment } from "react";
import Graph from "./Graph/Graph";
import IntervalSelector from "./IntervalSelector/IntervalSelector";

class Graphs extends Component {
	state = {
		selected: { value: 3, unit: "month" },
		options: [
			{ display: "7D", value: 7, unit: "day" },
			{ display: "1M", value: 1, unit: "month" },
			{ display: "3M", value: 3, unit: "month" },
			{ display: "6M", value: 6, unit: "month" },
			{ display: "1Y", value: 1, unit: "year" },
			{ display: "5Y", value: 5, unit: "year" },
		],
	};

	changeIntervalHandler = (value, unit) => {
		this.setState({
			selected: {
				value,
				unit,
			},
		});
	};

	render() {
		return (
			<Fragment>
				<div className="navbar sticky-top navbar-light bg-primary py-1">
					<div className="justify-content-start">
						{this.state.options.map((option) => {
							return (
								<IntervalSelector
									key={option.display}
									selected={this.state.selected}
									clicked={this.changeIntervalHandler}
									interval={option}
								/>
							);
						})}
					</div>
					<div className="ml-auto d-none d-lg-block d-xl-block">
						<span style={{ color: "white" }}>
							<u>Double click</u> for Info | <u>Right click</u>{" "}
							for Interactive Graph
						</span>
					</div>
				</div>
				<div className="page pt-2">
					<div className="row" id="graphs">
						{this.props.watchlist.map((symbol, index) => {
							return (
								<Graph
									key={symbol}
									symbol={symbol}
									index={index}
									interval={this.state.selected}
								/>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Graphs;
