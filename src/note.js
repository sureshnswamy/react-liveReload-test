import React from 'react';

export default React.createClass({
  render: function(){
    return (
      <div className='note'>
        {this.props.children}
        <span>
        </span>
      </div>
    ); 
  }
});