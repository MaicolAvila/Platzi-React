import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";
import "../components/styles/Badge.css"
import logotwitter from "../images/Logo-twitter.svg_.png"

class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="badge__sectionList">
                            <div className="row">
                                <div className="badge__sectionList-info-col-1">
                                    <div>
                                        <Gravatar 
                                            className="badge__avatar" 
                                            email={this.props.badge.email} 
                                            alt="Avatar"
                                        />
                                    </div>                                        
                                </div>
                                
                                <div className="badge__sectionList-info-col-2">
                                    <div >
                                        <span>{this.props.badge.firstName} {this.props.badge.lastName}</span>
                                        <br/>
                                        <img src={logotwitter} alt="" className="logo-twitter" />
                                        <span className="twitter-span">@{this.props.badge.twitter}</span>
                                        <br/>
                                        <label>{this.props.badge.jobTitle}</label>  
                                    </div> 
                                </div>
                            </div>
                            </div>
        )
    }
}

function  useSearchBadges(badges){

    const [ query, setQuery ] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName} ${badge.jobTitle} ${badge.twitter}`.toLowerCase().includes(query.toLowerCase());
    })

        setFilteredBadges(result)

    }, [ badges, query ]);

    return { setQuery, filteredBadges }
    
}

function BadgesList (props){

    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)



        if(filteredBadges.length === 0){
            return(
                <div>
                    <div className="form-group">
                    <label htmlFor="">Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={query}
                        onChange={(e) =>{
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <div>
            <div className="form-group">
                <label htmlFor="">Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={query}
                    onChange={(e) =>{
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
            {filteredBadges.map((badge)=>{
                
                return(
                    <li key={badge.id} className="Badge__List">
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <BadgesListItem badge={badge}/>
                        </Link>                    
                    </li>
                );
            })}
        </ul>
        </div>
        )
}


export default BadgesList;