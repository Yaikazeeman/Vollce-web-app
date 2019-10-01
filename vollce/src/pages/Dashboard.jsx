import React, { Component } from 'react'
import Nav from "../components/Nav"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Nav pageName={"Dashboard"}/>
                <h3>This is the Dashboard-page</h3>
            </div>
        )
    }
}
