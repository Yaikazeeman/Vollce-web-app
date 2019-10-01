import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Nav from "../components/Nav";
import './theMap.css';

export default class TheMap extends Component {
    render() {
        return (
            <div>
                <Nav pageName={"Map"}/>
                <img className="map" alt="map" src="/images/map.png"/>
            </div>
        )
    }
}
