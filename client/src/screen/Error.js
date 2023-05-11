import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


const Error = () => {

  return (
    <>
    <Helmet>
        <title>Error 404</title>
        <link type='image' href="../assets/favicon-32x32.png" />
      </Helmet>

      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name changed
            or is temporarily unavailable.
          </p>
          <Link to="/">Back To Homepage</Link>
        </div>
      </div>

    </>

  )
}

export default Error