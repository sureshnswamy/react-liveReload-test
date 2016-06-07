import React from 'react';

export default React.createClass({

  render: function(){
    return (
      <div className="productRow">
        <span className="productName"> {this.props.productName} </span>
        <span className="price"> {this.props.price} </span>
        <span className="stocked"> <input type="checkbox" readOnly checked={this.props.isStock} /> </span>
      </div>
    );
  }

})