import React from 'react';

const Tshirts = (props) => {
  return (<div className="app-page">
  		Shop for you favorite Tshirts
  		{[1,2,3,4,5,6,7,8,9,10].map(ts => <div className="card">{"Tshirt-"+ts}</div>)}
  	</div>)
}

export default Tshirts;