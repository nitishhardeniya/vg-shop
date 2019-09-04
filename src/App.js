import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Breadcrumb from './components/breadcrumb';
import nodes from './routes';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      routeData : nodes['products'].child,
      path : [{
        id: nodes['products'].title,
        elem:[<a className="link" onClick={()=> this.changePath(nodes['products'],true)} href >{nodes['products'].title}</a>]
      }],
      activeComponent : [nodes['products'].component]
    }
  }

  _buildNewPath = (item) => {
    
    const searchItem = item.title;
    const searchList = [...this.state.path];
    const foundItem = searchList.find(el => el.id === searchItem);
    const newPath = searchList.splice(0,searchList.indexOf(foundItem) + 1);
    
    //console.log("ff",searchList,searchList.indexOf(foundItem),newPath);
    return newPath;
  }

  changePath = (item, navClick) => {
    
    //console.log(item,navClick,"NHp")
    if(navClick){
      const newPath = this._buildNewPath(item);
      this.setState({
        path :newPath
      })
    } else{
      let newItem = [{
        id:item.title,
        elem:[<a className="link" onClick={()=> this.changePath(item,true)} href> {item.title} </a>]
      }];
      this.setState({
        path : [...this.state.path,...newItem]
      })
    }
    
    this.setState({
      routeData : item.child,
      activeComponent : [item.component]
    })

  }

  render(){
    return (
      <div className="App">
        <Breadcrumb nodeClick={this.changePath} routeData={this.state.routeData} path={this.state.path}/>
        {this.state.activeComponent}
      </div>
    );
  }
}

export default App;
