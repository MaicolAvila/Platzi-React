import React from "react"
import { Link } from "react-router-dom";

import "./styles/NavBar.css"
import logo from "../images/logo.svg"

class NavBar extends React.Component{
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/" >
                        <img src={logo} alt="" className="Navbar__brand-logo" />
                        <span className="font-weight-light" >Platzi</span>
                        <span className="font-weight-bold" >Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;