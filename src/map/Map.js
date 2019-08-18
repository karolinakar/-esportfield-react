import React from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import {MarkerModel} from "../model";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia2Fyb2xpbmFrYXIiLCJhIjoiY2p6ZzBxam1vMGhkcDNldDZ5d3NsNnJ0ciJ9.hQqCDQZLI-xaxEPbUWMGmA";

export class Map extends React.Component {

    state = {
        style: 'mapbox://styles/mapbox/light-v9',
        viewport: {
            width: 600,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        },
        markers: []
    };

    onViewportChange(viewport){
        this.setState(viewport);
    }

    addMarker(event){
        this.setState({
            style: this.state.style,
            viewport: this.state.viewport,
            markers: this.state.markers.concat(new MarkerModel(this.state.markers.length + 1, event.lngLat[0], event.lngLat[1]))
        });
    }

    updateMarker(event, id){
        const updatedMarkers = [];

        for (const marker of this.state.markers){
            if (id === marker.id){
                marker.longitude = event.lngLat[0];
                marker.latitude = event.lngLat[1];
            }
            updatedMarkers.push(marker);
        }

        this.setState({
            style: this.state.style,
            viewport: this.state.viewport,
            markers: updatedMarkers
        });
    }

    render() {

        const markersElement = [];

        for (const value of this.state.markers) {

            markersElement.push(
                <Marker latitude={value.latitude} longitude={value.longitude} offsetLeft={-20} offsetTop={-10}
                        key={value.id}
                        draggable={true}
                        onDragEnd={(event) => this.updateMarker(event, value.id) }>
                    <div>A</div>
                </Marker>)
        }

        return (
            <ReactMapGL
                {...this.state.viewport}
                mapStyle={this.state.style}
                mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                onViewportChange={(viewport) => this.onViewportChange({viewport})}
                onClick={(event) => this.addMarker(event)}
            >
             {markersElement}

            </ReactMapGL>
        );
    }
}

