import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import DepartureTimes from "./DepartureTimes";

const MainDepartureComponent = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [agencyList, setAgencyList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [stopsList, setStopsList] = useState([]);
  const [prediction, setPrediction] = useState();
  const [pathList, setPathList] = useState([]);
  const [routesList, setRoutesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList"
      )
      .then(response => {
        setAgencyList(response.data.agency);
        setLoading(false);
      })
      .catch(error => console.log(error));

    return () => {};
  }, []);

  const handleAgencySelect = event => {
    setLoading(true);
    axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=${event.target.value}`
      )
      .then(response => {
        setRoutesList(response.data.route);
        setLoading(false);
      });
  };

  const handleRoutesSelect = event => {
    setLoading(true);
    let agency = getValues()?.agency;
    axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=${agency}&r=${event.target.value}`
      )
      .then(response => {
        setStopsList(response.data.route.stop);
        setLoading(false);
      });

  };

  const handleStopsSelect = event => {
    setLoading(true);
    let agency = getValues()?.agency;
    let routes = getValues()?.routes;
    axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=${agency}&stopId=${event.target.value}&routeTag=${routes}`
      )
      .then(response => {
        setPrediction(response.data.predictions);
        setLoading(false);
      });
      
    axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=${agency}&r=${routes}&stopId=${event.target.value}`
      )
      .then(response => {
        setPathList(response.data.route.path);
      });

      axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=${agency}&r=${routes}&t=0`
      )
      .then(response => {
        setVehiclesList(response.data.vehicle);
      });
  };

  return (
    <div className="gradient-background-black">
      <div className="container py-5">
        <div className="card p-3 mb-3">
          <h3>Departure Times</h3>

          <h6>
            Create a service that gives real-time departure time for public
            transportation (use freely available public API). The app should
            geolocalize the user.
          </h6>

          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="location" className="black-text">
                    Location
                  </label>
                  <select
                    name="location"
                    className="form-control"
                    aria-describedby="locationHelp"
                    placeholder="Select your preferred location"
                    ref={register({ required: true })}
                  >
                    <option value="san">San Fransisco</option>
                    {/* <option value="lnd"> London </option> */}
                  </select>
                  <small id="locationHelp" className="form-text text-muted">
                    Choose the location you are in.
                  </small>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label htmlFor="agency" className="black-text">
                    Agency
                  </label>
                  <select
                    name="agency"
                    className="form-control"
                    aria-describedby="agencyHelp"
                    placeholder="Select your preferred agency"
                    ref={register({ required: true })}
                    defaultValue="-"
                    onChange={handleAgencySelect}
                  >
                    {agencyList instanceof Array &&
                      agencyList.map(item => (
                        <option key={item.tag} value={item.tag}>
                          {item.title}
                        </option>
                      ))}{" "}
                  </select>

                  <small id="agencyHelp" className="form-text text-muted">
                    Choose the Agency you are looking for.
                  </small>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label htmlFor="routes" className="black-text">
                    Routes
                  </label>
                  <select
                    name="routes"
                    className="form-control"
                    aria-describedby="routesHelp"
                    placeholder="Select your preferred routes"
                    ref={register({ required: true })}
                    disabled={loading}
                    defaultValue="-"
                    onChange={handleRoutesSelect}
                  >
                    <option key={"-"} value={"-"}>
                      -
                    </option>
                    {routesList instanceof Array &&
                      routesList.map(item => (
                        <option key={item.tag} value={item.tag}>
                          {item.title}
                        </option>
                      ))}{" "}
                  </select>

                  <small id="routesHelp" className="form-text text-muted">
                    Choose the Routes you are in.
                  </small>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label htmlFor="stops" className="black-text">
                    Stop
                  </label>
                  <select
                    name="stops"
                    className="form-control"
                    aria-describedby="stopsHelp"
                    placeholder="Select your preferred stops"
                    ref={register({ required: true })}
                    disabled={loading}
                    defaultValue="-"
                    onChange={handleStopsSelect}
                  >
                    <option key={"-"} value={"-"}>
                      -
                    </option>
                    {stopsList instanceof Array &&
                      stopsList.map(item => (
                        <option key={item.stopId} value={item.stopId}>
                          {item.title}
                        </option>
                      ))}{" "}
                  </select>

                  <small id="stopsHelp" className="form-text text-muted">
                    Choose the Routes you are in.
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>

        <DepartureTimes vehicles={vehiclesList} path={pathList} prediction={prediction}/>
      </div>
    </div>
  );
};

export default MainDepartureComponent;
