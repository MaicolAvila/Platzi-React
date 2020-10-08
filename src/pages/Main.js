import React from "react"
import { Link } from "react-router-dom";
import astronauts from "../images/astronauts.svg"
import platziconf from "../images/platziconf-logo.svg"
import "./styles/MainPage.css"

class MainPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="main__hero">
                    <div className="container__main">
                        <div className="row">
                            <div className="col-6">
                                <img src={platziconf} alt=""/>
                                <div className="container__main-info">
                                    <h1 >PRINT YOUR BADGES</h1>
                                    <p>The easiest way to manage your <br/> conference</p>
                                </div>
                                <div className="btn-main">
                                    <Link to="/badges" className="btn btn-primary">Start now</Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src={astronauts} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage;