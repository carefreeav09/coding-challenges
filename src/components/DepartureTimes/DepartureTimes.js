import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";
import { API_URL, SAN_FRANSISCO_LAT_LNG } from "../../constants/appConfig";

const DepartureTimes = props => {
  const { vehicles, path, prediction } = props;
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

  let newPaths = path.map(item => {
    return {
      point: item.point.map(it => {
        return {
          lat: parseFloat(it.lat),
          lng: parseFloat(it.lon)
        };
      })
    };
  });

  let newVehiclePositions = vehicles.map(item => {
    return {
      ...item,
      lng: parseFloat(item.lon),
      lat: parseFloat(item.lat)
    };
  });

  console.log(prediction);

  return (
    <div>
      {prediction && (
        <div className="card mb-2">
          <div className="card-body">
            <h4>Prediction</h4>
            {prediction?.direction?.title ? (
              <div>Title : {prediction?.direction?.title}
              <br/>
                Closest Bus ETA : {prediction?.direction?.prediction[0]?.minutes}
              </div>
            ) : (
              <div>Prediction Not Available
                
                <br/>
                
                Destination: {prediction.dirTitleBecauseNoPredictions}</div>
            )}
          </div>
        </div>
      )}

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
          {vehicles &&
            vehicles.length > 0 &&
            newVehiclePositions.map(item => (
              <Marker
                key={item.id}
                title={item.id}
                name={item.id}
                position={{ lat: item.lat, lng: item.lng }}
                options={{ icon: { url: 'http://individual.icons-land.com/IconsPreview/Transport/PNG/PublicTransport/48x48/Tram_Grey.png'}}}
              />
            ))}
          {newPaths.map(item => (
            <Polyline
              path={item.point}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                clickable: false,
                draggable: false,
                editable: false,
                visible: true,
                radius: 30000,
                zIndex: 1
              }}
            />
          ))}
          <Marker name={"Current location"} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DepartureTimes;
