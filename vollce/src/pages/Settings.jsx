import React, { Component } from 'react';
import Nav from "../components/Nav";
import { Row, Col, ListGroup } from "react-bootstrap";
import "./settings.css";

export default class Settings extends Component {
    render() {
        return (
            <div>
                <Nav pageName={"Settings"}/>
                <ListGroup>
                    <ListGroup.Item className="list-item">View settings</ListGroup.Item>
                    <ListGroup.Item className="list-item">Change password</ListGroup.Item>
                    <ListGroup.Item className="list-item">Find shop</ListGroup.Item>
                    <ListGroup.Item className="list-item">Get in contact</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
