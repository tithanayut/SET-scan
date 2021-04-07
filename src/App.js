import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Graphs from "./Graphs/Graphs";
import Watchlist from "./Watchlist/Watchlist";
import Currency from "./Currency/Currency";
import Commodities from "./Commodities/Commodities";
import { DEFAULT_WATCHLIST } from "./Watchlist/Groups";
import classes from "./App.module.css";

class App extends Component {
	state = {
		watchlist: [],
	};

	addSymbolHandler = (symbol) => {
		this.setState((prevState) => {
			const newState = [...prevState.watchlist];
			const newSymbol = symbol.toUpperCase().trim();
			if (!newState.includes(newSymbol)) {
				newState.push(newSymbol);
			}

			localStorage.setItem("watchlist", JSON.stringify(newState));
			return { watchlist: newState };
		});
	};

	replaceWatchlistHandler = (watchlist) => {
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
		this.setState({
			watchlist,
		});
	};

	removeSymbolHandler = (symbol) => {
		this.setState((prevState) => {
			const newState = prevState.watchlist.filter((sym) => {
				return sym !== symbol;
			});

			localStorage.setItem("watchlist", JSON.stringify(newState));
			return { watchlist: newState };
		});
	};

	static getDerivedStateFromProps() {
		let watchlist = [];
		if (localStorage.getItem("watchlist") === null) {
			watchlist = DEFAULT_WATCHLIST;
			localStorage.setItem("watchlist", JSON.stringify(watchlist));
		} else {
			watchlist = JSON.parse(localStorage.getItem("watchlist"));
		}
		return { watchlist };
	}

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact>
						<Graphs watchlist={this.state.watchlist} />
					</Route>
					<Route path="/watchlist">
						<Watchlist
							watchlist={this.state.watchlist}
							add={this.addSymbolHandler}
							remove={this.removeSymbolHandler}
							replace={this.replaceWatchlistHandler}
						/>
					</Route>
					<Route path="/currency">
						<Currency />
					</Route>
					<Route path="/commodities">
						<Commodities />
					</Route>
					<Route>
						<div className="container">
							<h1 className={classes.NotFound}>
								Sorry, page not found
							</h1>
						</div>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
