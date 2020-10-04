import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render () {
        
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt=""/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt=""/>
                    <h1>Maicol <br/> Avila</h1>
                </div>
                <div className="Badge__section-info">
                <p>{this.props.jobTitle}</p>
                <p>@{this.props.firstName}{this.props.lastName}</p>
                </div>
                <div className="Badge__footer">
                    #PlatziConf
                </div>
            </div>
        )
    }
}

export default Badge;