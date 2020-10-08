import React from "react";
import { read } from "react-router-dom";
import "./styles/BadgeNew.css"
import header from "../images/platziconf-logo.svg"

import api from "../api";
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }};

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({loading: false, form: data});
        }catch(error){
            this.setState({loading: false, error: error});
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false})

            this.props.history.push('/badges')
        } catch(error){
            this.setState({loading: false, error: error})
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>             
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl={this.state.form.avatar || 'https://es.gravatar.com/avatar/8bde2e68a68613b9cb273ffbf688eb4d?d=identicon'} 
                            />
                        </div>
                        <div className="col-6 Badge Badge__Form">
                        <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;