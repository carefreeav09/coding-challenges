import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import DepartureTimes from "./DepartureTimes";

const MainDepartureComponent = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [agencyList, setAgencyList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
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
        `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=${agency}&r=${event.target.value}&t=0`
      )
      .then(response => {
        setVehiclesList(response.data.vehicle);
        setLoading(false);
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
              <div className="col">
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
                    onChange={handleRoutesSelect}
                  >
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
            </div>
          </form>
        </div>

        <DepartureTimes vehicles={vehiclesList} />
      </div>
    </div>
  );
};

export default MainDepartureComponent;
