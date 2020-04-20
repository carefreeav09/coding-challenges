import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small stylish-color-dark pt-4">
      {/* Footer Challenges */}
      <div className="container text-center text-md-left">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-4 mx-auto">
            {/* Content */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              About this
            </h5>
            <p>
                Solving interview questions and challenges using React JS. All in one frontend solutions. 
                (Maybe backend too at some point not sure)
            </p>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 mx-auto">
            {/* Challenges */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Challenges</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Challenges */}
      <hr />
      <hr />
      {/* Social buttons */}
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
      {/* Social buttons */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://carefreeav09.github.io"> carefreecoders</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
