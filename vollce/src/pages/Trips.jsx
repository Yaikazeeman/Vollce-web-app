import React, { Component } from 'react';
import TripCards from "../components/TripCards";
import Nav from "../components/Nav";
import './trips.css'


export default class Trips extends Component {
    render() {
        return (
            <div>
                <Nav props={this.props} pageName={"Trip data"}/>
                <div className="trips-page">
                    <TripCards />
                    <TripCards />
                    <TripCards />
                    <TripCards />
                </div>
            </div>
        )
    }
}
