import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {

    state = {
        beers: []
    }
    
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        console.log("hello")
        console.log(this.state.beers)
        })
        
    }
    render() {
      return (
        <div>
        <header>
              <Navbar/>
        </header>
        <div className="Beers">
        {this.state.beers.map(beer => 
        <span key={beer._id}>
        <h3><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h3>
        <h5>{beer.tagline}</h5>
        <h6>Created by: {beer.tagline}</h6>
        <img src={beer.image_url} alt="beer"/>
        </span>)}
        </div>
        </div>
      );
    }
  }
   
  export default Beers;
 