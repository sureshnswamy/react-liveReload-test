import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/note';
import SearchProducts from './components/searchableProductsList/SearchProducts';

ReactDOM.render( <Note value="Hello React World" />, document.getElementById('container') );

// Testing ProductsList with sample data

var productsData = [
  { id:"1", name: "Shoes", price: "20", isStock: false},
  { id:"2", name: "Shirt", price: "40", isStock: true},
  { id:"3", name: "Tie", price: "24", isStock: false},
  { id:"4", name: "Socks", price: "18", isStock: true}
];

ReactDOM.render( 
  <SearchProducts productData={productsData} />,
  document.getElementById('searchProductsContainer') 
);
