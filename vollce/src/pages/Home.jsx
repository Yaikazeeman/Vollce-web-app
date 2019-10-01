import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, ProgressBar } from "react-bootstrap"
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="flex-container nav-bar">
                    <div>
                        <Link onClick={() => this.props.history.go(-1)}><img className="icon" alt="back" src="/images/arrow_back.svg"/></Link>
                    </div>
                    <div className="page-title">
                        <h4>Home</h4>
                    </div>
                    <div>
                    <Link to='/settings'><img className="icon"alt="settings" src="/images/contact_support.svg"/></Link>
                    </div>
                </nav>
                <div className="flex-container content-div">
                <img className="scooter-img-home" alt="scooter" src="/images/scooter-homepage.png"/>
                <div className="progressbar">
                    <p>Battery life:</p>
                    <ProgressBar now={60} label={`60%`} />
                </div>
                <div className="range">
                    <p>Battery range:</p>
                    <h4>20 km</h4>
                </div>
                </div>
            </div>
        )
    }
}

