import React from "react";
import { withRouter, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="full-page flex-center">
      <div className="container row">
        <div className="col-sm-12 col-md-4 p-2">
          <div className="card" >
            <img
              className="card-img-top"
              src={
                "https://www.sfmta.com/sites/default/files/styles/hero_2400/public/hero-images/2017/08/150128_clay_street_15.jpg?itok=VPdBH9EZ"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Departure Times</h5>
              <p className="card-text">
                Create a service that gives real-time departure time for public
                transportation.
              </p>
              <Link to="/departure-times">
                <button className="btn btn-primary">Visit App</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 p-2">
          <div className="card" >
            <img
              className="card-img-top"
              src={
                "https://i.pinimg.com/originals/e4/6c/93/e46c93be0ec1044b7ed2c97697855fe6.jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">San Fransisco Movies</h5>
              <p className="card-text">
                Create a service that shows on a map where movies have been
                filmed in SanFrancisco.
              </p>
              <Link to="/san-fransisco-movies">
                <button className="btn btn-primary">Visit App</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
