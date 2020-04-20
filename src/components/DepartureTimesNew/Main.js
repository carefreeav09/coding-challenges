import React, {useEffect, useState} from 'react';
import {GoogleMap, LoadScript, Marker, Polyline} from "@react-google-maps/api";
import {API_URL} from "../../constants/appConfig";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Popover, PopoverBody, PopoverHeader} from "reactstrap";

const Main = (props) => {
    const { register, handleSubmit, getValues } = useForm();
    const [agencyList, setAgencyList] = useState([]);
    const [vehiclesList, setVehiclesList] = useState([]);
    const [stopsList, setStopsList] = useState([]);
    const [prediction, setPrediction] = useState();
    const [pathList, setPathList] = useState([]);
    const [routesList, setRoutesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);


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


    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <div className="container-fluid py-5" style={{position: 'absolute', zIndex:'10', top: '80%'}}>
                <div className="card px-3 mb-3 pt-3">
                    <form>
                        <div className="row">
                            <div className="col">
                                <h3 id={'locationName'}>
                                    Departure Time
                                </h3>
                                <Popover placement="top" isOpen={popoverOpen} target="locationName" toggle={toggle}>
                                    <PopoverHeader>Location of pulbic transportation in San Fran</PopoverHeader>
                                    <PopoverBody>
                                        Create a service that gives real-time departure time for public
                                        transportation (use freely available public API). The app should
                                        geolocalize the user.
                                    </PopoverBody>
                                </Popover>
                            </div>
                            <div className="col">
                                <div className="form-group">
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
            </div>
            <LoadScript id="script-loader" googleMapsApiKey={API_URL}>
                <GoogleMap
                    id="example-map"
                    style={{ width: "100%", height: "70vh !important" }}
                    zoom={13}
                    center={{
                        lat: 37.739972,
                        lng: -122.431297
                    }}
                >
                    {/*{vehicles &&*/}
                    {/*vehicles.length > 0 &&*/}
                    {/*newVehiclePositions.map(item => (*/}
                    {/*    <Marker*/}
                    {/*        key={item.id}*/}
                    {/*        title={item.id}*/}
                    {/*        name={item.id}*/}
                    {/*        position={{ lat: item.lat, lng: item.lng }}*/}
                    {/*        options={{ icon: { url: 'http://individual.icons-land.com/IconsPreview/Transport/PNG/PublicTransport/48x48/Tram_Grey.png'}}}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {/*{newPaths.map(item => (*/}
                    {/*    <Polyline*/}
                    {/*        path={item.point}*/}
                    {/*        options={{*/}
                    {/*            strokeColor: "#FF0000",*/}
                    {/*            strokeOpacity: 0.8,*/}
                    {/*            strokeWeight: 2,*/}
                    {/*            fillColor: "#FF0000",*/}
                    {/*            fillOpacity: 0.35,*/}
                    {/*            clickable: false,*/}
                    {/*            draggable: false,*/}
                    {/*            editable: false,*/}
                    {/*            visible: true,*/}
                    {/*            radius: 30000,*/}
                    {/*            zIndex: 1*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*))}*/}
                    <Marker name={"Current location"} />
                </GoogleMap>
            </LoadScript>

        </div>
    );
};

export default Main;