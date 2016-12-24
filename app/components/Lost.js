import React from 'react';
import { Link } from 'react-router';

export default () => {

   return(
      <div className="margin_div">
         <h3>- Page Not Found -</h3>
         <p></p>
         <h3>Oh, hi.  How did you get here?  Are you lost?  Did you find a broken link?</h3>
         <p></p>
         <h3>Here, let's go <Link to="/">home</Link>.</h3>
      </div>

)}
