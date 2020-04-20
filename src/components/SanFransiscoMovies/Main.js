import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import MoviesMaps from "./MoviesMaps";

const Main = () => {
  const { register, handleSubmit,errors,  getValues } = useForm();
  const [allMoviesTitle, setAllMoviesTitle] = useState([]);
  const [allMovieLocations, setAllMoviesLocations] = useState([]);

  const onSubmit = values => {
      let movieName = document.getElementsByName('movieName')[0];
      axios.get(`https://data.sfgov.org/resource/yitu-d5am.json?title=${movieName?.defaultValue}`)
      .then(response => setAllMoviesLocations(response.data))
      .catch(error => console.log(error));
  };

  useEffect(()=> {
    axios.get('https://data.sfgov.org/resource/yitu-d5am.json')
    .then(response => {
      setAllMoviesTitle(response.data.map(item => item.title))
    })
    .catch(error => console.log(error))
  }, [])

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
            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="location" className="black-text">
                    Search by Movie Name
                  </label>
                  <TextInput
                    options={[...new Set(allMoviesTitle)]}
                    trigger={""}
                    name="movieName"
                    className="form-control"
                    aria-describedby="movieHelp"
                    placeholder="Select the movie"
                    ref={register({ required: true })}
                  />
                  {errors.location && 'Movie name is required'}


                  <small id="movieHelp" className="form-text text-muted">
                    Choose the movie filmed in San Fransisco
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

          <div className="mb-4">
            <MoviesMaps allMovieLocations={allMovieLocations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
