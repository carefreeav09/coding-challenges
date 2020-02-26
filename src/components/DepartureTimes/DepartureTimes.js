import React, { useState, useEffect } from "react";
import "../../App.css";
import logo from "../../logo.svg";
import { Map, GoogleApiWrapper, Marker} from "google-maps-react";
import {API_URL} from '../../constants/appConfig'

const DepartureTimes = props => {
  const [userLocation, setUserLocation] = useState({lat: 51.5074, lng: 0.1278});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("geo location isnt set by browser");
    }
  };

  const showPosition = position => {
    setUserLocation({lat: 51.5074, lng: 0.1278});
  };

  useEffect(() => {
    getLocation();
    return () => {};
  }, []);

  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Map
          google={props.google}
          zoom={11}
          style={mapStyles}
          center={userLocation}
        />
        {console.log(API_URL)}
      </header>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: API_URL
})(DepartureTimes);
