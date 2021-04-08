import React from "react";
import Graph from "./Graph/Graph";

const Graphs = (props) => {
	return (
		<div className="page">
			<div className="row" id="graphs">
				{props.watchlist.map((symbol, index) => {
					return (
						<Graph
							key={symbol}
							symbol={symbol}
							index={index}
							interval={{ value: 3, unit: "month" }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Graphs;
