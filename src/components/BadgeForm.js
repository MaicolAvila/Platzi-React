import React from 'react';



class BadgeForm extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        Twitter: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        console.log("Button was Clicked")
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.setState)
    }

    render () {
        
        return(
            <div className="Badge">
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lasttName}/>
                    </div>
                    <div className="form-group">
                        <label >email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="Twitter" value={this.state.Twitter}/>
                    </div>

                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;