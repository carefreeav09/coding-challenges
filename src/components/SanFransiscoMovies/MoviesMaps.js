import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { API_URL, SAN_FRANSISCO_LAT_LNG } from "../../constants/appConfig";

const MoviesMaps = (props) => {
    const { allMovieLocations } = props;

    const handlePosition = e => {
        console.log(e, 'e')
    }
  return <div>
      <LoadScript id="script-loader" googleMapsApiKey={API_URL} {...props}>
        <GoogleMap
          id="example-map"
          style={{ width: "100%", height: "70vh !important" }}
          zoom={13}
          center={{
            lat: 37.739972,
            lng: -122.431297
          }}
        >
          <Marker name={"Current location"} position={e => handlePosition(e)}/>
        </GoogleMap>
      </LoadScript>
  </div>;
};

export default MoviesMaps;
