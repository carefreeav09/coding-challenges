import React from "react";
import {withRouter, Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="full-page flex-center">
      <div className="card mx-5" style={{ width: "18rem" }}>
        <img className="card-img-top" src={'https://www.sfmta.com/sites/default/files/styles/hero_2400/public/hero-images/2017/08/150128_clay_street_15.jpg?itok=VPdBH9EZ'} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Departure Times</h5>
          <p className="card-text">
            Create a service that gives real-time departure time for public
            transportation.
          </p>
          <Link to='/departure-times'>
            <button  className="btn btn-primary">
            Visit App
            </button>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
