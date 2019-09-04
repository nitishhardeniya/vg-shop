import React from 'react';

const Headphones = (props) => {
  return (<div className="app-page">
  		Shop for you favorite Headphones
  		{[1,2,3,4,5,6,7,8,9,10].map(ts => <div className="card">{"Headphone-"+ts}</div>)}
  	</div>)
}

export default Headphones;