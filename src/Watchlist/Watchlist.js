import React, { Component } from "react";
import * as groups from "./Groups";
import classes from "./Watchlist.module.css";

class Watchlist extends Component {
	state = {
		symbol: "",
		groups: ["SET50", "SET100"],
	};

	addSymbolHandler = (event) => {
		event.preventDefault();

		if (this.state.symbol !== "") {
			this.props.add(this.state.symbol);
			this.setState({ symbol: "" });
		}
	};

	symbolTypedHandler = (event) => {
		this.setState({ symbol: event.target.value });
	};

	render() {
		const symbolsCount = this.props.watchlist.length;

		return (
			<div className="container">
				<div className="pt-5 row">
					<div className="col-sm-6">
						<form onSubmit={this.addSymbolHandler}>
							<div className="form-group ">
								<label htmlFor="symbol">
									<strong>
										Add SET stock symbol to watchlist
									</strong>
								</label>
								<input
									type="text"
									className={[
										"form-control",
										classes.symbolInput,
									].join(" ")}
									id="symbol"
									placeholder="SET Symbol"
									value={this.state.symbol}
									onChange={this.symbolTypedHandler}
								/>
							</div>

							<button type="submit" className="btn btn-primary">
								Add
							</button>
						</form>
					</div>
					<div className="col-sm-6 pt-2">
						<strong>Replace watchlist with:</strong>
						<div className="d-flex row justify-content-center">
							{this.state.groups.map((group) => {
								return (
									<button
										key={group}
										type="button"
										className="btn btn-success mr-3 mt-2"
										onClick={() => {
											this.props.replace(groups[group]);
										}}
									>
										{group}
									</button>
								);
							})}

							<button
								type="button"
								className="btn btn-warning mr-3 mt-2"
								onClick={() => {
									this.props.replace([]);
								}}
							>
								Remove all
							</button>
						</div>
					</div>
				</div>
				<hr />
				<div>
					<h4>Watchlist</h4>
					<p>
						{symbolsCount} {symbolsCount > 1 ? "stocks" : "stock"}{" "}
						in total
					</p>
					<ul>
						{this.props.watchlist.map((symbol) => {
							return (
								<li key={symbol}>
									{symbol}{" "}
									<span
										className={[
											"badge",
											"bg-warning",
											"text-light",
											classes.removeBadge,
										].join(" ")}
										onClick={() => {
											this.props.remove(symbol);
										}}
									>
										x
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Watchlist;
