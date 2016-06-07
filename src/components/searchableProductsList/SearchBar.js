import React from 'react';

export default React.createClass({

  getInitialState: function(){
    return {
      searchValue: '',
      isStock: false
    };
  },

  searchProducts: function(event){

    event.preventDefault();

    let searchVal = this.state.searchValue;
    let isStock = this.state.isStock;

    this.props.onSubmitHandler({searchValue: searchVal, isStock: isStock});

  },

  handleSearchValueChange: function(event){
    this.setState({searchValue: event.target.value});
  },

  handleStockChange: function(event){
    this.setState({isStock: event.target.value});
  },

  render: function(){

    return ( 
      <div className="searchBar">
        <form action="POST" onSubmit={this.searchProducts}>
          <input type="text" className="searchProduct" placeholder="Search..." 
            value={this.state.searchValue}
            onChange={this.handleSearchValueChange} />
          <br/>
          <input type="checkbox" label="" 
            value={this.state.isStock}
            onChange={this.handleStockChange} /> 
          <span>Only show products in the stock</span>
        </form>
      </div>
    );
  }

});