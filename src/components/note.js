import React from 'react';
import styles from '../styles/note.less';

export default React.createClass({
  render: function(){
    return (
      <div className='note'>
        {this.props.value}
        <span>
        </span>
      </div>
    ); 
  }
});