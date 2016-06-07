import React from 'react';
import SearchBar from './SearchBar';
import ProductsList from './ProductsList';
import styles from '../../styles/searchableProductsList.less';

export default React.createClass({

  getInitialState: function(){
    return {
      items: this.props.productData!=null ? this.props.productData : []
    }
  },

  search: function(searchObject){
    
    console.log(searchObject);
    if(searchObject.searchValue===''){
      searchObject.searchValue = null;
    }

    var filteredList = this.state.items.filter(function(item){
      if( item.name.toLowerCase().search(searchObject.searchValue) != -1 && item.isStock === searchObject.isStock ){
        return item;
      }
    });

    this.setState({items: filteredList});    
  },

  render: function(){
    return (
      <div className="searchProducts">
        <SearchBar onSubmitHandler={this.search} />
        <ProductsList productData={this.state.items} />
      </div>
    );  
  }

});