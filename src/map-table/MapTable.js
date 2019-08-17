import BootstrapTable from 'react-bootstrap-table-next';
import React from "react";

const products = [];
const columns = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'name',
    text: 'Szerokość geograficzna'
}, {
    dataField: 'price',
    text: 'Długość geograficzna'
}];

export function MapTable() {
    return (
         <BootstrapTable keyField='id' data={ products } columns={ columns } />
    );
}
