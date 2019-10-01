import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
    render() {
        return (
            <nav className="flex-container nav-bar">
                <div>
                    <Link to=""><img className="icon" alt="back" src="/images/arrow_back.svg"/></Link>
                </div>
                <div className="page-title">
                    <h4>{this.props.pageName}</h4>
                </div>
                <div>
                    <Link to='/'><img className="icon home-icon" alt="home" src="/images/home.png"/></Link>
                </div>
            </nav>
        )
    }
}



