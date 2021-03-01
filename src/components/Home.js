import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h3>Hi!</h3>
        <h1>This is Home 🏚</h1>
      </div>
      <ul className="links" >
          <li><Link to='/beers'>Beers</Link></li>
          <li><Link to='/randombeer'>Random Beer</Link></li>
          <li><Link to='/newbeer'>New Beer</Link></li>
        </ul>
    </div>
  )
}


export default Home;