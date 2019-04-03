import React, {Component} from 'react'
import './idPage.css' 

 class IdPage extends Component{

  render(){
    let info = this.props.data[this.props.id-1]
    console.log(info)
    return(<div className = 'parentDiv'>
      <div className = 'homeBar'>
      <h3 className = 'homeText'>Home</h3>
      </div>
      <div className = 'blackBorder'>
      <div className ='displayBox'>
        <div className = 'info'>
        <h1 className = 'name'>{`${info.name.first} ${info.name.last}`}</h1>

        <h4 className = 'from'>From: {` ${info.city} ${info.country}`}</h4>
        <h4 className = 'title'>Job Title: {`${info.title}`}</h4>
        <h4 className = "employer">Employer: {`${info.employer}`}</h4>
        <h4>
          <h4 className = 'favorite Movies'>Favorite Movies</h4>
        <ol className = 'movies'>
          <li>{info.favoriteMovies[0]}</li>
          <li>{info.favoriteMovies[1]}</li>
          <li>{info.favoriteMovies[2]}</li>
        </ol>
        </h4>
        </div>
        <h1 className = "idNum">{info.id}/25</h1>
      </div>
      {/* <button className = "previous" onClick ={()=>this.props.minusOne(this.props.id)} disabled ={this.props.id === 1}>previous</button>
      <button className = 'next' onClick = {()=>this.props.plusOne(this.props.id)} disabled = {this.props.id === 25}>next</button> */}
      </div>
    </div>
    )
    
  }
}

export default IdPage