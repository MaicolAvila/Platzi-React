import React from "react"

import logo from "../images/badge-header.svg"

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <a>
                    <img src={logo} alt=""/>
                    <span>Platzi</span>
                    <span>Conf</span>
                </a>
            </div>
        )
    }
}

export default NavBar;