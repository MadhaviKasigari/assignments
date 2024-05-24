import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {

    return (
        <React.Fragment>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active">
                            Inputs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Recipe" className="nav-link" activeClassName="active">
                            Recipe
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
