import React from 'react';
import FASHION from './../../constants/fashion';

const Fashion = (props) => {
  return (<React.Fragment>
  			<div className="app-page">
  				Lot of stuffs to fill your wardrobe.
  				<div className="section">
	  				{FASHION.map(item => <div className="card">{item.itemName}</div>)}
	  			</div>
  			</div>
  		</React.Fragment>)
}

export default Fashion;