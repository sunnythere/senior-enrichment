import React from 'react';
import { IndexLink } from 'react-router'
import NavLink from './NavLink';

export default (props) => {

   return(
          <div id="navbar" className="margin_div">


            <IndexLink to="/" className="navlink">Home</IndexLink>

            <NavLink to="/campus" className="navlink">Campuses</NavLink>

            <NavLink to="/student" className="navlink">Students</NavLink>


          </div>
          )
}
