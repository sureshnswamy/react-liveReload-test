import React from 'react';
import ProductRow from './ProductRow';

export default React.createClass({

  render: function(){

    var products = this.props.productData.map(function(data){
      console.log(data);
      return (
        <ProductRow productName={data.name} price={data.price} key={data.id} isStock={data.isStock} />
      );
    });
    return (
      <div className="productsList">
        <div className="header">
          <span> Product Name </span>
          <span> Price </span>
          <span> In Stock </span>
        </div>
        {products}
      </div>
    ); 
  }

})
