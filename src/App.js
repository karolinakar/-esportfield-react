import React from 'react';
import './App.css';
import {Accordion, Card, Button} from 'react-bootstrap';
import {MapTable} from './map-table/MapTable';
import {Map} from './map/Map';

function App() {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Mapa
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Map/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Tabela znaczników
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <MapTable/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    );
}

export default App;
