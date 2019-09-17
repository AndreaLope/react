import React from 'react';
import logo from './logo.svg';
import './App.css';
import {menu} from 'valore.json';
class App extends Component{
	  constructor() {
    super();
    this.state={
      menu
    }
  }
  rander()
  {
  	const menu=this.state.menu.map((todo, i)=>{
  		return (
  			<div className='card'>
  			{todo.text}
  			</div>
  			)

  	})
  	return (
    <div className="App">
    <nav className="navbar"
    {menu}
    </nav> 
    </div>
  );
}
}
  

export default App;
