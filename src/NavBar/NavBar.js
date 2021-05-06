import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/" className="navbar-brand">
				SET Scanner
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarContent"
				aria-controls="navbarContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbarContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" exact className="nav-link">
							Graphs
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/watchlist" className="nav-link">
							Watchlist
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/currency" className="nav-link">
							Currency
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/commodities" className="nav-link">
							Commodities
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
