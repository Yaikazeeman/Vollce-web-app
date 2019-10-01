import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './tripCards.css';

export default class TripCards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="trip-cards-img" variant="top" src="/images/holder-map.png" />
                    <Card.Body >
                        <Card.Title>Thu. 26 Sep. 2019</Card.Title>
                        <Card.Text>
                        Distance: 10km, Time: 15min
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
