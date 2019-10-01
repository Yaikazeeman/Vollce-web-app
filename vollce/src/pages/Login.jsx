import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-logo-div flex-container">
                    <img alt="login-logo" className=" login-logo" src="/images/favicon.png"/>
                </div>
                <div className="flex-container login-button-div">
                    <Button variant="info">Login</Button>
                    <Button variant="info" ><Link to="/">Demo</Link></Button>
                </div>
            </div>
        )
    }
}
