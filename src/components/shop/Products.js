import React from 'react';
import PRODUCTS from './../../constants/products';

const Products = (props) => {
  return (<React.Fragment>
  			<div className="app-page">
  				Choose from Fashion and Electronics.
  				<div className="section">
	  				{PRODUCTS.map(item => <div className="card">{item.itemName}</div>)}
	  			</div>
  			</div>
  		</React.Fragment>)
}

export default Products;