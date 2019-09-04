import React, { Component } from 'react';

class Breadcrumb extends Component {

	render() {
		
		return (
			<React.Fragment>
			
				<div className="brd-cr">{this.props.path.map((item,index) => <div className={index === this.props.path.length-1 ? 'node active-node' : 'node'} >{item.elem} <span className="arrow-link"> > </span> </div>)} </div>
				<div className="details">{ this.props.routeData && Object.keys(this.props.routeData).map(item => <div className="link-item" onClick={() => this.props.nodeClick(this.props.routeData[item],false)}>{this.props.routeData[item].title}</div>)}</div>
			</React.Fragment>
		);
	}
}


export default Breadcrumb;