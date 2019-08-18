import React from 'react';
import './App.css';
import {Accordion, Card} from 'react-bootstrap';
import {MapTable} from './map-table/MapTable';
import {Map} from './map/Map';
import Container from "react-bootstrap/Container";

export class App extends React.Component {

    state = {
        markers: []
    };

    render() {
        return (
            <Container>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="header">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Mapa
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Map markers={this.state.markers}
                                     onMarkersChange={(markers) => this.setState({markers: markers})}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="header">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Tabela znaczników
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <MapTable markers={this.state.markers}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        );
    }
}


