import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

const Main = () => {
  const { register, handleSubmit, getValues } = useForm();

  const locationsArrays = [
    {
      title: "Golden Gate Bridge",
      lat: 37.8199,
      lng: 122.4783
    },
    {
      title: "City Hall",
      lat: 37.7793,
      lng: 122.4192
    },
    {
      title: "Potrero Hill",
      lat: 37.7605,
      lng: 122.4009
    },
    {
      title: "The Painted Ladies",
      lat: 37.7763,
      lng: 122.4328
    },
    {
      title: "Alcatraz Island",
      lat: 37.827,
      lng: 122.423
    },
    {
      title: "Li Po (916 Grant Avenue at Washington, Chinatown)",
      lat: 37.7605,
      lng: 122.4009
    },
    {
      title: "Treasure Island",
      lat: 37.8236,
      lng: 122.3706
    },
    {
      title: "Grace Cathedral",
      lat: 37.7919,
      lng: 122.413
    },
    {
      title: "Rainforest Café (145 Jefferson Street)",
      lat: 37.8081,
      lng: 122.4147
    }
  ];

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="gradient-background-black">
      <div className="container py-5">
        <div className="card p-3 mb-3">
          <h3>San Fransisco Movies Locations</h3>

          <h6>
            Create a service that shows on a map where movies have been filmed
            in San Francisco. The user should be able to filter the view using
            autocompletion search.
          </h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Search for the movies </h4>
            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="location" className="black-text">
                    Search by Location
                  </label>

                  <TextInput
                    options={locationsArrays.map(item => item.title)}
                    trigger={""}
                    name="location"
                    className="form-control"
                    aria-describedby="locationHelp"
                    placeholder="Select your preferred location"
                    ref={register({ required: true })}
                  />

                  <small id="locationHelp" className="form-text text-muted">
                    Choose the location in San Fransisco
                  </small>
                </div>
              </div>

              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="movie" className="black-text">
                    Search by Movie name
                  </label>

                  <TextInput
                    // options={moviesArrays.map(item => item.title)}
                    trigger={""}
                    name="movie"
                    className="form-control"
                    aria-describedby="movieHelp"
                    placeholder="Select your preferred movie"
                    ref={register({ required: true })}
                  />

                  <small id="movieHelp" className="form-text text-muted">
                    Choose the movie
                  </small>
                </div>
              </div>

              <div className="col-2">
                <button type="submit" className="btn btn-dark mt-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
