import React from "react"
import "./styles/BadgeNew.css"
import header from "../images/badge-header.svg"

import NavBar from "../components/NavBar"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component{
    state = {form: {}};

    handleChange = e => {
        this.setState({
            form: {
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Maicol" lastName="Avila" twitter="@MaicolAvila" jobTitle="Frontend Engineer" avatarUrl="" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;