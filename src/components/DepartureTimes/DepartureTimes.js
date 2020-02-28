import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";
import { API_URL, SAN_FRANSISCO_LAT_LNG } from "../../constants/appConfig";

const DepartureTimes = props => {
  const { vehicles, path } = props;
  const [userLocation, setUserLocation] = useState(SAN_FRANSISCO_LAT_LNG);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("geo location isnt set by browser");
    }
  };

  const showPosition = position => {
    setUserLocation(SAN_FRANSISCO_LAT_LNG);
  };

  useEffect(() => {
    getLocation();
    return () => {};
  }, []);

  const mapStyles = {
    width: "100%",
    height: "60vh"
  };


  return (
    <LoadScript id="script-loader" googleMapsApiKey={API_URL} {...props}>
      <GoogleMap
        className="map-style"
        id="example-map"
        style={{width: '100%', height: '60vh'}}
        zoom={13}
        center={userLocation}
      >
        {vehicles &&
          vehicles.length > 0 &&
          vehicles.map(item => (
            <Marker
              key={item.id}
              title={item.id}
              name={item.id}
              icon={{
                url: "https://image.flaticon.com/icons/png/512/171/171255.png",
                anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32, 32)
              }}
              position={{ lat: item.lat, lng: item.lon }}
            />
          ))}
        <Polygon
          paths={path}
          options={{
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1
          }}
        />
        <Marker name={"Current location"} />
      </GoogleMap>
    </LoadScript>
  );
};

export default DepartureTimes;
