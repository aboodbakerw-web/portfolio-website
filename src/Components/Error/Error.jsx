import React from 'react'

import ErrorImg from "../../assets/images/1847.jpg";
import { Link } from 'react-router-dom';
import { Home } from '../Home/Home';

export const Error = () => {
  return (
    <>    
    
    <section className="error-page position-relative">
      <img
        src={ErrorImg}
        alt="Error page"
        className="error-img"
      />

      <Link to="/Home" className="return-home-link">
        Return Home
      </Link>
    </section>
    </>

  )
}
