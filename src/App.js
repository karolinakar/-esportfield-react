import React from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';

const products = [];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

function App() {
  return (
      <BootstrapTable keyField='id' data={ products } columns={ columns } />
  );
}

export default App;
