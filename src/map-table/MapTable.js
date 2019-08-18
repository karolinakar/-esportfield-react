import BootstrapTable from 'react-bootstrap-table-next';
import React from "react";

const columns = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'longitude',
    text: 'Długość geograficzna'
}, {
    dataField: 'latitude',
    text: 'Szerokość geograficzna'
}];

export class MapTable extends React.Component {
    render() {
        return (
            <BootstrapTable keyField='id' data={this.props.markers} columns={columns}/>
        );
    }
}
