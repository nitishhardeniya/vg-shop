import React from 'react';
import ELECTRONICS from './../../constants/electronics';

const Electronics = (props) => {
  return (<React.Fragment>
  			<div className="app-page">
  				We have got all appliances covered
  				<div className="section">
	  				{ELECTRONICS.map(item => <div className="card">{item.itemName}</div>)}
	  			</div>
  			</div>
  		</React.Fragment>)
}

export default Electronics;