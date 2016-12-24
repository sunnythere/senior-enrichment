import React from 'react';
import {Link} from 'react-router';

//import DropDownMenu from './DropDownMenu';



export default (props) => {

console.log('props in campuslist: ', props)
return (
   <div className="margin_div">
      <h3>Campus List</h3>

      <Link to="/c/add"><button type="submit" className="add_edit_btn">add</button></Link>

      {
      // <DropDownMenu handleChange={props.handleChange} orderValue={props.orderValue} />
      }

      <ul>
      { // list
         props.campusList.map((campus) => {
            return <li key={campus.id}><Link to={`/campus/${campus.id}`}>{campus.name}</Link></li>
          })
        //  props.orderedList ?
        // props.orderedList.map((campus) => {
        //     return <li key={campus.id}><Link to={`/campus/${campus.id}`}>{campus.name}</Link></li>
        //  })
        // : <h3>Loading...</h3>
      }
      </ul>
   </div>
)

}
