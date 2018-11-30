import React, { Component } from 'react';

import './login.component.css';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
    }
    
    authenticate = (username,password)=>{
        // Make api call for authentication service

        return true;
    }

    handleSubmit = (event) => {
        //logic for pushing the route and authentication

        console.log('[Username ] :', this.state.username);
        console.log('[Password ] :', this.state.password)

        if (this.authenticate(this.state.username, this.state.password)) {
            this.props.history.push('/main');
        }

        event.preventDefault();
    }

    handleChangeUname = (event) => {
        //Store uname in state
        let uname = event.target.value;
        this.setState({ username: uname });
    }

    handleChangePassword = (event) => {
        //strore password in state
        let pass = event.target.value;
        this.setState({ password: pass });
    }


    render() {
        console.log(this.props);
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit}>
                    <div className='formElement'>
                        <label>
                            User Name
                        </label>
                        <input type='text' onChange={this.handleChangeUname} />
                    </div>
                    <div className='formElement'>
                        <label>
                            Password
                        </label>
                        <input type='password' onChange={this.handleChangePassword} />
                    </div>
                    <div className='formElement'>
                        <input type="submit" value="Submit" />
                    </div>


                </form>
            </div>
        );
    }
}

export default LoginComponent;