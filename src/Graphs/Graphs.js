import React from "react";
import Graph from "./Graph/Graph";

const Graphs = () => {
	return (
		<div className="page">
			<p>Demo</p>
			<div className="row" id="graphs">
				<Graph
					symbol="KBANK"
					index={1}
					interval={{ value: 3, unit: "month" }}
				/>
				<Graph
					symbol="SCC"
					index={1}
					interval={{ value: 3, unit: "month" }}
				/>
				<Graph
					symbol="PTT"
					index={1}
					interval={{ value: 3, unit: "month" }}
				/>
			</div>
		</div>
	);
};

export default Graphs;
