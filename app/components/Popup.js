import React from 'react';
import { Link } from 'react-router';


export default (props) => {

   return(
          <div className="margin_div pop_div">

               <em>{props.message}</em>


            <button type="submit" className="hide" onClick={props.clearPopUp}>No, Go Back</button>
            <button type="submit" className="delete" onClick={props.deleteForReal}><Link to={`/c/deleted/${props.selectedCampus.id}`}>Yes, Delete</Link></button>
          </div>
          )
}
