import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { API_URL, SAN_FRANSISCO_LAT_LNG } from "../../constants/appConfig";

const CustomMarkers = () => <div>Text</div>;

const DepartureTimes = props => {
  const { vehicles } = props;
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
    <Map
      className="map-style"
      google={props.google}
      zoom={13}
      style={mapStyles}
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
              anchor: new props.google.maps.Point(32,32),
              scaledSize: new props.google.maps.Size(32,32)
            }}
            position={{ lat: item.lat, lng: item.lon }}
          />
        ))}

      <Marker name={"Current location"} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: API_URL
})(DepartureTimes);
