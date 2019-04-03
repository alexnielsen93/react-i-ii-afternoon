import React, { Component } from 'react';
import './App.css';
import data from "./data"
import IdPage from './components/idPage'
class App extends Component {
  constructor(){
    super()
   this.state={
     name: '',
     city: '',
     country: '',
     title: '',
     employer: '',
     favMovies: [],
     id: 1,
   } 
   
  }

  plusOne(id){
    
    this.setState({
      id: (id+1)
    })

  }
  
  minusOne(id){
    this.setState({
      id: (id-1)
    })
  }
  


  
  //button: increment/decrement ID, disabled at ends of list, 

  //display area: look at the state ID, get corresponding info, and display it
  //
  render() {

   

    return (
      <div className="App">
      <IdPage data = {data} id = {this.state.id} plusOne = {this.plusOne} minusOne = {this.minusOne}/>
      <div className = "displayArea"></div>
      <button className = "previous" onClick ={()=>this.minusOne(this.state.id)} disabled ={this.state.id === 1}>&lt;Previous</button>
      <button className = 'next' onClick = {()=>this.plusOne(this.state.id)} disabled = {this.state.id === 25}>Next&gt;</button>
      </div>
    );
  }
}

export default App;
